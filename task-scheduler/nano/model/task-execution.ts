import {Task} from './task';

export interface TaskExecution {
    version: number
    id: string
    task: Task
    steps?: TaskStep[]
    status?: Status
}

export const TaskExecutionEntityInfo = {
    namespace: "default",
    resource: "TaskExecution",
    restPath: "task-execution",
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

export enum Status {
    PENDING = "PENDING",
    RUNNING = "RUNNING",
    COMPLETED = "COMPLETED",
    FAILED = "FAILED",
}

export const TaskExecutionResource = {
  "auditData": {
    "createdBy": "admin",
    "updatedBy": "admin",
    "createdOn": "2024-01-03T11:13:29Z",
    "updatedOn": "2024-01-03T23:05:42Z"
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
      "type": "LIST",
      "item": {
        "type": "STRUCT",
        "typeRef": "TaskStep"
      }
    },
    "task": {
      "type": "REFERENCE",
      "required": true,
      "reference": "default/Task"
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

