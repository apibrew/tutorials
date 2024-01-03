
export interface Task {
    id: string
    name: string
    version: number
    schedule: Schedule
    execution: TaskExecution
    description?: string
    lastExecution?: string | Date
    nextExecution?: string | Date
}

export const TaskEntityInfo = {
    namespace: "default",
    resource: "Task",
    restPath: "task",
}

export interface Schedule {
    initialDelay: number
    cron: string
    fixedRate: number
    fixedDelay: number
}

export interface TaskExecution {
    steps: TaskStep[]
}

export interface TaskStep {
    record: Record
    nanoCode: string
}

export interface Record {
    resource: string
    namespace: string
    properties: object
}

export const TaskResource = {
  "auditData": {
    "createdBy": "admin",
    "updatedBy": "admin",
    "createdOn": "2024-01-03T11:13:29Z",
    "updatedOn": "2024-01-03T23:05:42Z"
  },
  "name": "Task",
  "namespace": {
    "name": "default"
  },
  "properties": {
    "description": {
      "type": "STRING"
    },
    "execution": {
      "type": "STRUCT",
      "typeRef": "TaskExecution",
      "required": true
    },
    "id": {
      "type": "UUID",
      "required": true,
      "immutable": true,
      "exampleValue": "a39621a4-6d48-11ee-b962-0242ac120002",
      "description": "The unique identifier of the resource. It is randomly generated and immutable.",
      "annotations": {
        "PrimaryProperty": "true",
        "SpecialProperty": "true"
      }
    },
    "lastExecution": {
      "type": "TIMESTAMP"
    },
    "name": {
      "type": "STRING",
      "required": true,
      "unique": true
    },
    "nextExecution": {
      "type": "TIMESTAMP"
    },
    "schedule": {
      "type": "STRUCT",
      "typeRef": "Schedule",
      "required": true
    },
    "version": {
      "type": "INT32",
      "required": true,
      "defaultValue": 1,
      "exampleValue": 1,
      "title": "Version",
      "description": "The version of the resource/record. It is incremented on every update.",
      "annotations": {
        "AllowEmptyPrimitive": "true",
        "SpecialProperty": "true"
      }
    }
  },
  "types": [
    {
      "name": "Schedule",
      "title": "",
      "description": "",
      "properties": {
        "cron": {
          "type": "STRING",
          "description": "Cron expression. See https://en.wikipedia.org/wiki/Cron\n"
        },
        "fixedDelay": {
          "type": "INT32",
          "description": "Fixed delay in milliseconds between the end of the last execution and the start of the next.\n"
        },
        "fixedRate": {
          "type": "INT32",
          "description": "Fixed rate in milliseconds between the start of each execution.\n"
        },
        "initialDelay": {
          "type": "INT32",
          "description": "Initial delay in milliseconds before the first execution.\n"
        }
      }
    },
    {
      "name": "TaskExecution",
      "title": "",
      "description": "",
      "properties": {
        "steps": {
          "type": "LIST",
          "item": {
            "type": "STRUCT",
            "typeRef": "TaskStep"
          }
        }
      }
    },
    {
      "name": "TaskStep",
      "title": "",
      "description": "",
      "properties": {
        "nanoCode": {
          "type": "STRING",
          "length": 64000,
          "title": "Content",
          "description": "Code content",
          "annotations": {
            "SQLType": "TEXT"
          }
        },
        "record": {
          "type": "STRUCT",
          "typeRef": "Record"
        }
      }
    },
    {
      "name": "Record",
      "title": "",
      "description": "",
      "properties": {
        "namespace": {
          "type": "STRING",
          "required": true
        },
        "properties": {
          "type": "OBJECT"
        },
        "resource": {
          "type": "STRING",
          "required": true
        }
      }
    }
  ],
  "annotations": {
    "NormalizedResource": "true"
  }
} as unknown

