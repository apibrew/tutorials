
export interface Account {
    id: string
    name?: string
    email?: string
    version: number
}

export const AccountEntityInfo = {
    namespace: "default",
    resource: "Account",
    restPath: "account",
}

export const AccountResource = {
  "auditData": {
    "createdBy": "2023-11-09T23:24:29Z",
    "updatedBy": "system",
    "createdOn": "2023-11-06T19:22:07Z"
  },
  "name": "Account",
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
      "description": "The name of the account"
    },
    {
      "name": "email",
      "type": "STRING",
      "description": "The email of the account"
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
    }
  ],
  "annotations": {
    "NormalizedResource": "true"
  }
} as unknown

