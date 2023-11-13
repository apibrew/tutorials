
export interface InstancePlan {
    id: string
    name: string
    amount: number
    currency: string
    limits?: PlanLimits
    attributes?: Attribute[]
    version: number
    auditData?: AuditData
}

export const InstancePlanEntityInfo = {
    namespace: "default",
    resource: "InstancePlan",
    restPath: "instanceplan",
}

export interface PlanLimits {
    requestPerMinute: number
    maxRecordCount: number
    maxResourceCount: number
    maxNamespaceCount: number
}

export interface Attribute {
    name: string
    value: string
}

export interface AuditData {
    createdBy: string
    updatedBy: string
    createdOn: string | Date
    updatedOn: string | Date
}

export const InstancePlanResource = {
  "auditData": {
    "createdBy": "2023-11-09T23:24:29Z",
    "updatedBy": "system",
    "createdOn": "2023-11-06T19:22:06Z"
  },
  "name": "InstancePlan",
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
      "description": "The user of the payment"
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
      "name": "limits",
      "type": "STRUCT",
      "typeRef": "PlanLimits"
    },
    {
      "name": "attributes",
      "type": "LIST",
      "item": {
        "name": "",
        "type": "STRUCT",
        "typeRef": "Attribute"
      }
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
      "name": "PlanLimits",
      "title": "",
      "description": "",
      "properties": [
        {
          "name": "requestPerMinute",
          "type": "INT32",
          "description": "The request per minute"
        },
        {
          "name": "maxRecordCount",
          "type": "INT32",
          "description": "The max record count"
        },
        {
          "name": "maxResourceCount",
          "type": "INT32",
          "description": "The max resource count"
        },
        {
          "name": "maxNamespaceCount",
          "type": "INT32",
          "description": "The max namespace count"
        }
      ]
    },
    {
      "name": "Attribute",
      "title": "",
      "description": "",
      "properties": [
        {
          "name": "name",
          "type": "STRING",
          "description": "The name of the attribute"
        },
        {
          "name": "value",
          "type": "STRING",
          "description": "The value of the attribute"
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

