
export interface AppUser {
    id: string
    version: number
    password?: string
    username?: string
}

export const AppUserEntityInfo = {
    namespace: "default",
    resource: "AppUser",
    restPath: "appuser",
}

export const AppUserResource = {
  "auditData": {
    "createdBy": "admin",
    "createdOn": "2023-12-09T22:27:27Z"
  },
  "name": "AppUser",
  "namespace": {
    "name": "default"
  },
  "virtual": true,
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
    "password": {
      "type": "STRING"
    },
    "username": {
      "type": "STRING"
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
  "annotations": {
    "AllowPublicCreateAccess": "true",
    "NormalizedResource": "true"
  }
} as unknown

