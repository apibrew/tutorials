import {Task} from "./model/task";
import {Status, TaskExecution} from "./model/task-execution";
import {computeNextExecutionTime} from "./compute-schedule";

const TaskResource = resource<Task>('Task')
const TaskExecutionResource = resource<TaskExecution>('TaskExecution')

const destroyTask = (task: Task) => {

}

const executionScheduleMap = new Map<string, {
    task: Task,
    execution: TaskExecution
    timeout: NodeJS.Timeout
}>()

function scheduleTaskExecution(task: Task) {
    console.log('scheduleTaskExecution', task)
    // reload task
    task = TaskResource.load(task)
    // if nextExecution is null, or it is in past
    if (!task.nextExecution || new Date(Date.parse(task.nextExecution as string)).getTime() < new Date().getTime()) {
        console.warn('Task is not scheduled for execution', task)
        return
    }

    let tillNextExecution = new Date(Date.parse(task.nextExecution as string)).getTime() - new Date().getTime()

    if (tillNextExecution > 1000) {
        tillNextExecution = 10000
    }

    const timeout = setTimeout(() => {
        console.log('Executing task', task)
        const execution = TaskExecutionResource.create({
            task: task,
            status: Status.PENDING,
            steps: task.execution.steps
        } as TaskExecution)

        executionScheduleMap.set(task.id, {
            ...executionScheduleMap.get(task.id),
            execution: null,
        })
    }, tillNextExecution);

    console.log('task is scheduled after ms', tillNextExecution)

    executionScheduleMap.set(task.id, {
        task: task,
        execution: null,
        timeout: timeout
    })

    console.log('Scheduled task', task)
}

TaskResource.beforeCreate(task => {
    task.nextExecution = computeNextExecutionTime(task)

    return task;
})

TaskResource.afterCreate(scheduleTaskExecution)
TaskResource.afterUpdate(scheduleTaskExecution)

TaskResource.beforeUpdate(task => {
    task.nextExecution = computeNextExecutionTime(task)

    console.log('task.nextExecution', task.nextExecution)

    return task;
})

TaskResource.afterDelete(item => {
    destroyTask(item)
})

// Execution
TaskExecutionResource.beforeCreate(execution => {
    console.debug('TaskExecution beforeCreate', execution)
    if (execution.status !== Status.PENDING) {
        throw new Error('Invalid status: ' + execution.status)
    }

    execution.status = Status.RUNNING
    const task = TaskResource.load(execution.task)

    try {
        if (execution.steps) {
            execution.steps.forEach(step => {
                if (step.record) {
                    const recordResource = resource(step.record.namespace, step.record.resource)

                    recordResource.create(step.record.properties)
                } else if (step.nanoCode) {
                    eval(step.nanoCode)
                }
            })
        }
        execution.status = Status.COMPLETED
    } catch (e) {
        execution.status = Status.FAILED
        console.error(e)
    }

    task.lastExecution = new Date()
    task.nextExecution = computeNextExecutionTime(task)
    TaskResource.update(task)

    console.debug('TaskExecution beforeCreate done', execution)

    return execution
})

const tasks = TaskResource.list({
    limit: 10000
})

tasks.content.forEach(scheduleTaskExecution)