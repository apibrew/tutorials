import {Instance} from './instance';

export interface DeploymentTask {
    id: string
    instance: Instance
    kind: Kind
    params?: { [key: string]: string }
    status: Status
    message?: string
    version: number
    auditData?: AuditData
}

export const DeploymentTaskEntityInfo = {
    namespace: "default",
    resource: "DeploymentTask",
    restPath: "deploymenttask",
}

export interface AuditData {
    createdBy: string
    updatedBy: string
    createdOn: string | Date
    updatedOn: string | Date
}

export enum Kind {
    DEPLOY = "deploy",
    UPGRADE = "upgrade",
    DESTROY = "destroy",
    RESTART = "restart",
}

export enum Status {
    PENDING = "pending",
    EXECUTING = "executing",
    EXECUTED = "executed",
    FAILED = "failed",
    DONE = "done",
}

export const DeploymentTaskResource = {
  "auditData": {
    "createdBy": "2023-11-09T23:24:29Z",
    "updatedBy": "system",
    "createdOn": "2023-11-06T19:22:07Z"
  },
  "name": "DeploymentTask",
  "namespace": {
    "name": "default"
  },
  "properties": [
    {
      "name": "id",
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
    {
      "name": "instance",
      "type": "REFERENCE",
      "required": true,
      "reference": {
        "resource": {
          "name": "Instance",
          "namespace": {
            "name": "default"
          }
        },
        "cascade": false
      }
    },
    {
      "name": "kind",
      "type": "ENUM",
      "required": true,
      "enumValues": [
        "deploy",
        "upgrade",
        "destroy",
        "restart"
      ]
    },
    {
      "name": "params",
      "type": "MAP",
      "item": {
        "name": "",
        "type": "STRING"
      }
    },
    {
      "name": "status",
      "type": "ENUM",
      "required": true,
      "defaultValue": "pending",
      "enumValues": [
        "pending",
        "executing",
        "executed",
        "failed",
        "done"
      ]
    },
    {
      "name": "message",
      "type": "STRING",
      "length": 4096
    },
    {
      "name": "version",
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
    },
    {
      "name": "auditData",
      "type": "STRUCT",
      "typeRef": "AuditData",
      "exampleValue": {
        "createdBy": "admin",
        "createdOn": "2023-11-09T23:24:29Z",
        "updatedBy": "admin",
        "updatedOn": "2023-11-09T23:24:29Z"
      },
      "title": "Audit Data",
      "description": "The audit data of the resource/record. \nIt contains information about who created the resource/record, when it was created, who last updated the resource/record and when it was last updated.",
      "annotations": {
        "SpecialProperty": "true"
      }
    }
  ],
  "types": [
    {
      "name": "AuditData",
      "title": "Audit Data",
      "description": "Audit Data is a type that represents the audit data of a resource/record. ",
      "properties": [
        {
          "name": "createdBy",
          "type": "STRING",
          "immutable": true,
          "length": 256,
          "exampleValue": "admin",
          "title": "Created By",
          "description": "The user who created the resource/record.",
          "annotations": {
            "SpecialProperty": "true"
          }
        },
        {
          "name": "updatedBy",
          "type": "STRING",
          "length": 256,
          "exampleValue": "admin",
          "title": "Updated By",
          "description": "The user who last updated the resource/record.",
          "annotations": {
            "SpecialProperty": "true"
          }
        },
        {
          "name": "createdOn",
          "type": "TIMESTAMP",
          "immutable": true,
          "exampleValue": "2023-11-09T23:24:29Z",
          "title": "Created On",
          "description": "The timestamp when the resource/record was created.",
          "annotations": {
            "SpecialProperty": "true"
          }
        },
        {
          "name": "updatedOn",
          "type": "TIMESTAMP",
          "exampleValue": "2023-11-09T23:24:29Z",
          "title": "Updated On",
          "description": "The timestamp when the resource/record was last updated.",
          "annotations": {
            "SpecialProperty": "true"
          }
        }
      ]
    }
  ],
  "annotations": {
    "EnableAudit": "true",
    "NormalizedResource": "true"
  }
} as unknown

