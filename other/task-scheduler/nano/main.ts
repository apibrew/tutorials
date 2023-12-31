import {Task} from "./model/task";
import {TaskExecution} from "./model/task-execution";

const TaskResource = resource<Task>('Task')
const TaskExecutionResource = resource<TaskExecution>('TaskExecution')

const setupTask = (task: Task) => {

}

const destroyTask = (task: Task) => {

}

TaskResource.afterCreate(item => {
    setupTask(item)
})

TaskResource.afterUpdate(item => {
    destroyTask(item)
    setupTask(item)
})

TaskResource.afterDelete(item => {
    destroyTask(item)
})
