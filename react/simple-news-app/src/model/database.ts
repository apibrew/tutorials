
export interface Database {
    id: string
    name: string
    config: DbConfig
    version: number
    auditData?: AuditData
}

export const DatabaseEntityInfo = {
    namespace: "default",
    resource: "Database",
    restPath: "database",
}

export interface DbConfig {
    username: string
    password: string
    host: string
    port: string
    dbName: string
    defaultSchema: string
}

export interface AuditData {
    createdBy: string
    updatedBy: string
    createdOn: string | Date
    updatedOn: string | Date
}

export const DatabaseResource = {
  "auditData": {
    "createdBy": "2023-11-09T23:24:29Z",
    "updatedBy": "system",
    "createdOn": "2023-11-06T19:22:06Z"
  },
  "name": "Database",
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
      "description": "The name of the account"
    },
    {
      "name": "config",
      "type": "STRUCT",
      "typeRef": "DbConfig",
      "required": true,
      "description": "The configuration of the database"
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
      "name": "DbConfig",
      "title": "",
      "description": "",
      "properties": [
        {
          "name": "username",
          "type": "STRING",
          "required": true,
          "description": "The username of the database"
        },
        {
          "name": "password",
          "type": "STRING",
          "required": true,
          "description": "The password of the database"
        },
        {
          "name": "host",
          "type": "STRING",
          "required": true,
          "description": "The host of the database"
        },
        {
          "name": "port",
          "type": "STRING",
          "required": true,
          "description": "The port of the database"
        },
        {
          "name": "dbName",
          "type": "STRING",
          "required": true,
          "description": "The name of the database"
        },
        {
          "name": "defaultSchema",
          "type": "STRING",
          "required": true,
          "description": "The default schema of the database"
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

