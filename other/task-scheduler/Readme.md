Task Scheduler
========

## Setup

### Install dependencies

```bash
npm install

npm run prepareSchema
npm run generateModel

npm run deploy
```

### Now we can create a task

```bash

apbr apply -f example/task-1.yml

```

task1.yml:

```yaml
type: Task
name: task-1
description: |
  This task transfers 1000 units from account-1 to account-2 every 10 seconds.
schedule:
  fixedDelay: 15000
execution:
  steps:
    - nanoCode: |
        console.log('Hello World!', execution.id);
    - record:
        resource: Person
        namespace: default
        properties:
          firstName: Taleh
          lastName: Ibrahimli
```