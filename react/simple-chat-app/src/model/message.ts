
export interface Message {
    from?: string
    content?: string
    version: number
    id: string
    to?: string
    date?: string | Date
}

export const MessageEntityInfo = {
    namespace: "default",
    resource: "Message",
    restPath: "message",
}

export const MessageResource = {
  "auditData": {
    "createdBy": "admin",
    "updatedBy": "admin",
    "createdOn": "2023-12-22T00:57:08Z",
    "updatedOn": "2023-12-22T00:57:12Z"
  },
  "name": "Message",
  "namespace": {
    "name": "default"
  },
  "properties": {
    "content": {
      "type": "STRING"
    },
    "date": {
      "type": "TIMESTAMP"
    },
    "from": {
      "type": "STRING"
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
    "to": {
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
    "NormalizedResource": "true"
  }
} as unknown

