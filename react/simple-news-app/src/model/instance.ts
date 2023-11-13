import {Database} from './database';
import {InstancePlan} from './instance-plan';

export interface Instance {
    id: string
    name: string
    owner?: string
    title?: string
    description?: string
    cluster: string
    replicaCount: number
    namespace: string
    database: Database
    plan?: InstancePlan
    paidPlanUntil?: string | Date
    backendVersion: string
    health: Health
    deploymentStatus: DeploymentStatus
    version: number
    auditData?: AuditData
}

export const InstanceEntityInfo = {
    namespace: "default",
    resource: "Instance",
    restPath: "instance",
}

export interface AuditData {
    createdBy: string
    updatedBy: string
    createdOn: string | Date
    updatedOn: string | Date
}

export interface TestInput {
    a: number
    b: number
}

export enum Health {
    HEALTHY = "healthy",
    UNHEALTHY = "unhealthy",
}

export enum DeploymentStatus {
    PENDING = "pending",
    PENDING_DEPLOY = "pendingDeploy",
    DEPLOYED = "deployed",
    DEPLOY_FAILED = "deployFailed",
    PENDING_DESTROY = "pendingDestroy",
    DESTROYED = "destroyed",
    DESTROY_FAILED = "destroyFailed",
}

export const InstanceResource = {
  "auditData": {
    "createdBy": "2023-11-09T23:24:29Z",
    "updatedBy": "system",
    "createdOn": "2023-11-06T19:22:06Z"
  },
  "name": "Instance",
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
      "name": "name",
      "type": "STRING",
      "required": true,
      "unique": true,
      "immutable": true,
      "description": "The name of the account"
    },
    {
      "name": "owner",
      "type": "STRING"
    },
    {
      "name": "title",
      "type": "STRING"
    },
    {
      "name": "description",
      "type": "STRING"
    },
    {
      "name": "cluster",
      "type": "STRING",
      "required": true,
      "defaultValue": "default",
      "description": "The cluster of the instance"
    },
    {
      "name": "replicaCount",
      "type": "INT32",
      "required": true,
      "defaultValue": 1,
      "description": "The number of replicas of the instance"
    },
    {
      "name": "namespace",
      "type": "STRING",
      "required": true,
      "defaultValue": "instances",
      "description": "The namespace of the instance"
    },
    {
      "name": "database",
      "type": "REFERENCE",
      "required": true,
      "reference": {
        "resource": {
          "name": "Database",
          "namespace": {
            "name": "default"
          }
        },
        "cascade": false
      }
    },
    {
      "name": "plan",
      "type": "REFERENCE",
      "reference": {
        "resource": {
          "name": "InstancePlan",
          "namespace": {
            "name": "default"
          }
        },
        "cascade": false
      }
    },
    {
      "name": "paidPlanUntil",
      "type": "TIMESTAMP"
    },
    {
      "name": "backendVersion",
      "type": "STRING",
      "required": true,
      "defaultValue": "1.0.0",
      "description": "The version of the api-brew"
    },
    {
      "name": "health",
      "type": "ENUM",
      "required": true,
      "defaultValue": "healthy",
      "enumValues": [
        "healthy",
        "unhealthy"
      ]
    },
    {
      "name": "deploymentStatus",
      "type": "ENUM",
      "required": true,
      "defaultValue": "pending",
      "enumValues": [
        "pending",
        "pendingDeploy",
        "deployed",
        "deployFailed",
        "pendingDestroy",
        "destroyed",
        "destroyFailed"
      ]
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

