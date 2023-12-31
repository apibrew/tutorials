import {Task} from './task';
// import {Code} from './code';
// import {Resource} from './resource';

export interface TaskExecution {
    steps?: boolean
    status?: Status
    version: number
    id: string
    task: Task
}

export const TaskExecutionEntityInfo = {
    namespace: "default",
    resource: "TaskExecution",
    restPath: "taskexecution",
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

export enum Status {
    PENDING = "PENDING",
    RUNNING = "RUNNING",
    COMPLETED = "COMPLETED",
    FAILED = "FAILED",
}

export enum Kind {
    CREATE_RECORD = "CREATE_RECORD",
    EXECUTE_NANO_CODE = "EXECUTE_NANO_CODE",
}

export const TaskExecutionResource = {
  "auditData": {
    "createdBy": "admin",
    "updatedBy": "admin",
    "createdOn": "2023-12-31T12:00:31Z",
    "updatedOn": "2023-12-31T23:43:56Z"
  },
  "name": "TaskExecution",
  "namespace": {
    "name": "default"
  },
  "properties": {
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
    "status": {
      "type": "ENUM",
      "enumValues": [
        "PENDING",
        "RUNNING",
        "COMPLETED",
        "FAILED"
      ]
    },
    "steps": {
      "type": "BOOL"
    },
    "task": {
      "type": "REFERENCE",
      "required": true,
      "reference": {
        "resource": {
          "name": "Task",
          "namespace": {
            "name": "default"
          }
        },
        "cascade": false
      }
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

