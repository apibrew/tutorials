import {Category} from './category';

export interface News {
    id: string
    title?: string
    description?: string
    published?: boolean
    date?: string | Date
    category?: Category
    version: number
}

export const NewsEntityInfo = {
    namespace: "default",
    resource: "News",
    restPath: "news",
}

export const NewsResource = {
  "auditData": {
    "createdBy": "admin",
    "createdOn": "2023-11-11T17:05:00Z"
  },
  "name": "News",
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
      "name": "published",
      "type": "BOOL"
    },
    {
      "name": "date",
      "type": "DATE"
    },
    {
      "name": "category",
      "type": "REFERENCE",
      "reference": {
        "resource": {
          "name": "Category",
          "namespace": {
            "name": "default"
          }
        },
        "cascade": false
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
    }
  ],
  "annotations": {
    "NormalizedResource": "true"
  }
} as unknown

