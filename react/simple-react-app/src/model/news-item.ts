
export interface NewsItem {
    details?: NewsItemDetails
    version: number
    id: string
    name?: string
    title?: string
    content?: string
}

export const NewsItemEntityInfo = {
    namespace: "default",
    resource: "NewsItem",
    restPath: "newsitem",
}

export interface NewsItemDetails {
    category: string
}

export const NewsItemResource = {
  "auditData": {
    "createdBy": "admin",
    "createdOn": "2023-12-09T22:27:28Z"
  },
  "name": "NewsItem",
  "namespace": {
    "name": "default"
  },
  "properties": {
    "content": {
      "type": "STRING"
    },
    "details": {
      "type": "STRUCT",
      "typeRef": "NewsItemDetails"
    },
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
    "name": {
      "type": "STRING",
      "unique": true
    },
    "title": {
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
  "types": [
    {
      "name": "NewsItemDetails",
      "title": "",
      "description": "",
      "properties": {
        "category": {
          "type": "STRING"
        }
      }
    }
  ],
  "annotations": {
    "NormalizedResource": "true"
  }
} as unknown

