
export interface Category {
    id: string
    title?: string
    description?: string
    version: number
}

export const CategoryEntityInfo = {
    namespace: "default",
    resource: "Category",
    restPath: "category",
}

export const CategoryResource = {
  "auditData": {
    "createdBy": "2023-11-11T17:05:00Z",
    "updatedBy": "admin",
    "createdOn": "2023-11-11T17:04:28Z"
  },
  "name": "Category",
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
      "name": "title",
      "type": "STRING"
    },
    {
      "name": "description",
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
    "NormalizedResource": "true"
  }
} as unknown

