Task Scheduler
========


# Creating Task Scheduler with help of ApiBrew

## Schedule new task
```http request
POST /task
Content-Type: application/json

{
    "name": "task name",
    "description": "task description",
    "schedule": "0 0 0 * * *",
    "command": "echo 'Hello World!'"
}
```