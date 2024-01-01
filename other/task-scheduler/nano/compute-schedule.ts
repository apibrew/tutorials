import {Task} from "./model/task";

function computeNextExecutionTimeFixedDelay(task: Task) {
    console.log('computeNextExecutionTimeFixedDelay', task)
    const nextExecutionTime = task.lastExecution ? new Date(task.lastExecution as string) : new Date()
    nextExecutionTime.setMilliseconds(nextExecutionTime.getMilliseconds() + task.schedule.fixedDelay);
    return nextExecutionTime;
}

function computeNextExecutionTimeForFixedRate(task: Task) {
    console.log('computeNextExecutionTimeForFixedRate', task)
    const now = new Date();
    const rateInMilliseconds = task.schedule.fixedRate;

    // Truncate current time to the nearest interval division
    const truncatedCurrentTime = new Date(Math.floor(now.getTime() / rateInMilliseconds) * rateInMilliseconds);

    let nextExecutionTime = new Date(truncatedCurrentTime.getTime() + rateInMilliseconds);

    // If the difference between last execution time and the calculated next execution time is less than the interval,
    // move to the subsequent interval.
    if (task.lastExecution && (nextExecutionTime.getTime() - new Date(task.lastExecution as string).getTime() < rateInMilliseconds)) {
        nextExecutionTime = new Date(nextExecutionTime.getTime() + rateInMilliseconds);
    }

    return nextExecutionTime;
}

export function computeNextExecutionTime(task: Task): Date {
    if (task.schedule.cron) {
        return computeNextExecutionTimeForCronExpression(task)
    } else if (task.schedule.fixedDelay) {
        return computeNextExecutionTimeFixedDelay(task)
    } else if (task.schedule.fixedRate) {
        return computeNextExecutionTimeForFixedRate(task)
    } else {
        throw new Error("Invalid schedule")
    }
}

export function computeNextExecutionTimeForCronExpression(task: Task): Date | null {
    console.log('computeNextExecutionTimeForCronExpression', task)
    const cronParts = task.schedule.cron.split(' ');
    if (cronParts.length !== 5) {
        throw new Error('Invalid cron expression');
    }

    const now = new Date();
    const nextExecution = new Date(now.getTime());

    // Set initial date to one minute in the future to avoid immediate execution
    nextExecution.setMinutes(now.getMinutes() + 1);
    nextExecution.setSeconds(0);
    nextExecution.setMilliseconds(0);

    const fields = {
        minute: cronParts[0],
        hour: cronParts[1],
        dayOfMonth: cronParts[2],
        month: cronParts[3],
        dayOfWeek: cronParts[4]
    };

    if (!findNext(fields.minute, 60, nextExecution.getMinutes(), (val) => nextExecution.setMinutes(val)) ||
        !findNext(fields.hour, 24, nextExecution.getHours(), (val) => nextExecution.setHours(val)) ||
        !findNext(fields.dayOfMonth, 31, nextExecution.getDate(), (val) => nextExecution.setDate(val)) ||
        !findNext(fields.month, 12, nextExecution.getMonth() + 1, (val) => nextExecution.setMonth(val - 1)) ||
        !findNextDayOfWeek(fields.dayOfWeek, nextExecution)) {
        return null; // Cannot find the next execution time
    }

    return nextExecution;
}

function findNext(field: string, max: number, current: number, setter: (val: number) => void): boolean {
    if (field === '*') {
        setter(current);
        return true;
    }

    const parts = field.split(',');
    for (const part of parts) {
        if (part.indexOf('-') !== -1) {
            const [start, end] = part.split('-').map(Number);
            for (let i = start; i <= end; i++) {
                if (i >= current && i < max) {
                    setter(i);
                    return true;
                }
            }
        } else {
            const value = parseInt(part);
            if (value >= current && value < max) {
                setter(value);
                return true;
            }
        }
    }

    return false;
}

function findNextDayOfWeek(field: string, nextExecution: Date): boolean {
    if (field === '*') return true;

    const targetDays = field.split(',').map(Number);
    for (let i = 0; i < 7; i++) {
        const nextDay = new Date(nextExecution.getTime());
        nextDay.setDate(nextExecution.getDate() + i);

        if (targetDays.indexOf(nextDay.getDay()) != -1) {
            nextExecution.setDate(nextExecution.getDate() + i);
            return true;
        }
    }

    return false;
}
