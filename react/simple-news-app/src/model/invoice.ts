import {Payment} from './payment';
import {Instance} from './instance';
import {InstancePlan} from './instance-plan';

export interface Invoice {
    id: string
    user: string
    items: InvoiceItem[]
    amount: number
    currency: string
    payment: Payment
    paymentDate?: string | Date
    status: Status
    executionStatus: ExecutionStatus
    notes?: string
    version: number
    auditData?: AuditData
}

export const InvoiceEntityInfo = {
    namespace: "default",
    resource: "Invoice",
    restPath: "invoice",
}

export interface InvoiceItem {
    instance: Instance
    instancePreviousPlanName: string
    instancePreviousPlanUntil: string | Date
    monthCount: number
    plan: InstancePlan
}

export interface AuditData {
    createdBy: string
    updatedBy: string
    createdOn: string | Date
    updatedOn: string | Date
}

export enum Status {
    PENDING = "pending",
    PAID = "paid",
}

export enum ExecutionStatus {
    PENDING = "pending",
    EXECUTING = "executing",
    EXECUTED = "executed",
    FAILED = "failed",
}

export const InvoiceResource = {
  "auditData": {
    "createdBy": "2023-11-09T23:24:29Z",
    "updatedBy": "system",
    "createdOn": "2023-11-06T19:22:07Z"
  },
  "name": "Invoice",
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
      "name": "user",
      "type": "STRING",
      "required": true,
      "description": "The user of the payment"
    },
    {
      "name": "items",
      "type": "LIST",
      "required": true,
      "item": {
        "name": "",
        "type": "STRUCT",
        "typeRef": "InvoiceItem"
      }
    },
    {
      "name": "amount",
      "type": "INT32",
      "required": true,
      "description": "The amount of the payment"
    },
    {
      "name": "currency",
      "type": "STRING",
      "required": true,
      "description": "The currency of the payment"
    },
    {
      "name": "payment",
      "type": "REFERENCE",
      "required": true,
      "reference": {
        "resource": {
          "name": "Payment",
          "namespace": {
            "name": "default"
          }
        },
        "cascade": false
      },
      "description": "The payment of the payment"
    },
    {
      "name": "paymentDate",
      "type": "TIMESTAMP",
      "description": "The date of the payment"
    },
    {
      "name": "status",
      "type": "ENUM",
      "required": true,
      "defaultValue": "pending",
      "enumValues": [
        "pending",
        "paid"
      ]
    },
    {
      "name": "executionStatus",
      "type": "ENUM",
      "required": true,
      "defaultValue": "pending",
      "enumValues": [
        "pending",
        "executing",
        "executed",
        "failed"
      ]
    },
    {
      "name": "notes",
      "type": "STRING",
      "length": 1024,
      "description": "The notes of the payment"
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
      "name": "InvoiceItem",
      "title": "",
      "description": "",
      "properties": [
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
          },
          "description": "The instance of the payment"
        },
        {
          "name": "instancePreviousPlanName",
          "type": "STRING"
        },
        {
          "name": "instancePreviousPlanUntil",
          "type": "TIMESTAMP"
        },
        {
          "name": "monthCount",
          "type": "INT32",
          "required": true,
          "description": "The amount of the payment"
        },
        {
          "name": "plan",
          "type": "REFERENCE",
          "required": true,
          "reference": {
            "resource": {
              "name": "InstancePlan",
              "namespace": {
                "name": "default"
              }
            },
            "cascade": false
          },
          "description": "The plan of the payment"
        }
      ]
    },
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

