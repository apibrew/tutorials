// import {Code} from './code';
// import {Resource} from './resource';

export interface Task {
    description?: string
    lastExecution?: string | Date
    nextExecution?: string | Date
    id: string
    name: string
    version: number
    schedule?: Schedule
    execution?: TaskExecution
}

export const TaskEntityInfo = {
    namespace: "default",
    resource: "Task",
    restPath: "task",
}

export interface Schedule {
    cron: string
    fixedRate: number
    fixedDelay: number
    initialDelay: number
}

export interface TaskExecution {
    steps: boolean
}

export interface TaskStep {
    kind: Kind
    record: Record
    nanoCode: any
}

export interface Record {
    resource: any
    properties: object
}

export enum Kind {
    CREATE_RECORD = "CREATE_RECORD",
    EXECUTE_NANO_CODE = "EXECUTE_NANO_CODE",
}

export const TaskResource = {
  "auditData": {
    "createdBy": "admin",
    "updatedBy": "admin",
    "createdOn": "2023-12-31T12:00:28Z",
    "updatedOn": "2023-12-31T23:43:53Z"
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
      "typeRef": "TaskExecution"
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
      "typeRef": "Schedule"
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
          "type": "BOOL"
        }
      }
    },
    {
      "name": "TaskStep",
      "title": "",
      "description": "",
      "properties": {
        "kind": {
          "type": "ENUM",
          "enumValues": [
            "CREATE_RECORD",
            "EXECUTE_NANO_CODE"
          ]
        },
        "nanoCode": {
          "type": "REFERENCE",
          "reference": {
            "resource": {
              "name": "Code",
              "namespace": {
                "name": "nano"
              }
            },
            "cascade": false
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
        "properties": {
          "type": "OBJECT"
        },
        "resource": {
          "type": "REFERENCE",
          "reference": {
            "resource": {
              "name": "Resource",
              "namespace": {
                "name": "system"
              }
            },
            "cascade": false
          }
        }
      }
    }
  ],
  "annotations": {
    "NormalizedResource": "true"
  }
} as unknown

