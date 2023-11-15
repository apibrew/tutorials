
export interface AppUser {
    id: string
    username?: string
    password?: string
    version: number
}

export const AppUserEntityInfo = {
    namespace: "default",
    resource: "AppUser",
    restPath: "appuser",
}

export const AppUserResource = {
  "auditData": {
    "createdBy": "2023-11-15T01:27:43Z",
    "updatedBy": "admin",
    "createdOn": "2023-11-14T08:55:49Z"
  },
  "name": "AppUser",
  "namespace": {
    "name": "default"
  },
  "virtual": true,
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
      "name": "username",
      "type": "STRING"
    },
    {
      "name": "password",
      "type": "STRING"
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
    "AllowPublicCreateAccess": "true",
    "NormalizedResource": "true"
  }
} as unknown

