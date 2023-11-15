
export interface Message {
    id: string
    content?: string
    from?: string
    to?: string
    date?: boolean
    version: number
}

export const MessageEntityInfo = {
    namespace: "default",
    resource: "Message",
    restPath: "message",
}

export const MessageResource = {
  "auditData": {
    "createdBy": "2023-11-15T01:27:43Z",
    "updatedBy": "admin",
    "createdOn": "2023-11-15T01:27:39Z"
  },
  "name": "Message",
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
      "name": "content",
      "type": "STRING"
    },
    {
      "name": "from",
      "type": "STRING"
    },
    {
      "name": "to",
      "type": "STRING"
    },
    {
      "name": "date",
      "type": "BOOL"
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

