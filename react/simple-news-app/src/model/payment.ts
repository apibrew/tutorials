
export interface Payment {
    id: string
    user: string
    amount: number
    currency: string
    status: Status
    returnUrl?: string
    paymentDate?: string | Date
    token?: string
    paymentId?: string
    responses?: string[]
    version: number
    auditData?: AuditData
}

export const PaymentEntityInfo = {
    namespace: "default",
    resource: "Payment",
    restPath: "payment",
}

export interface AuditData {
    createdBy: string
    updatedBy: string
    createdOn: string | Date
    updatedOn: string | Date
}

export enum Status {
    PENDING = "pending",
    EXECUTING = "executing",
    PAID = "paid",
    FAILED = "failed",
}

export const PaymentResource = {
  "auditData": {
    "createdBy": "2023-11-09T23:24:29Z",
    "updatedBy": "system",
    "createdOn": "2023-11-06T19:22:07Z"
  },
  "name": "Payment",
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
      "name": "status",
      "type": "ENUM",
      "required": true,
      "defaultValue": "pending",
      "enumValues": [
        "pending",
        "executing",
        "paid",
        "failed"
      ]
    },
    {
      "name": "returnUrl",
      "type": "STRING",
      "description": "The return url of the payment"
    },
    {
      "name": "paymentDate",
      "type": "TIMESTAMP",
      "description": "The date of the payment"
    },
    {
      "name": "token",
      "type": "STRING",
      "description": "The token of the payment"
    },
    {
      "name": "paymentId",
      "type": "STRING",
      "description": "The token of the payment"
    },
    {
      "name": "responses",
      "type": "LIST",
      "item": {
        "name": "",
        "type": "STRING"
      },
      "description": "The responses of the payment"
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

