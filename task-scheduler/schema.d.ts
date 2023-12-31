export interface searchResult<T> {
    content: T[]
    total: number
}

declare type RecordOperator<T> = (record: T, event?: Event) => T | void

declare type Date = any

declare type console = any

export interface resourceObject<T> {
    beforeCreate(operator: RecordOperator<T>): void
    beforeUpdate(operator: RecordOperator<T>): void
    beforeDelete(operator: RecordOperator<T>): void
    beforeGet(operator: RecordOperator<T>): void
    beforeList(operator: RecordOperator<T>): void

    afterCreate(operator: RecordOperator<T>): void
    afterDelete(operator: RecordOperator<T>): void
    afterUpdate(operator: RecordOperator<T>): void
    afterGet(operator: RecordOperator<T>): void
    afterList(operator: RecordOperator<T>): void

    create(entity: T): T
    delete(entity: T): T
    load(entity: T): T
    get(id: string): T
    list(params: RecordSearchParams): searchResult<T>
    update(entity: T): void
    define(entity: T): void
}

declare global {
    function resource<T>(name1: string, name2?: string): resourceObject<T>
}

export interface BooleanExpression {
    and: BooleanExpression[]
    or: BooleanExpression[]
    not: BooleanExpression
    equal: PairExpression
    lessThan: PairExpression
    greaterThan: PairExpression
    lessThanOrEqual: PairExpression
    greaterThanOrEqual: PairExpression
    in: PairExpression
    isNull: Expression
    regexMatch: RegexMatchExpression
}

export interface PairExpression {
    left: Expression
    right: Expression
}

export interface RegexMatchExpression {
    pattern: string
    expression: Expression
}

export interface Expression {
    property: string
    value: object
}

export interface AuditData {
    createdBy: string
    updatedBy: string
    createdOn: string | Date
    updatedOn: string | Date
}

export interface FunctionCall {
    host: string
    functionName: string
}

export interface HttpCall {
    uri: string
    method: string
}

export interface ChannelCall {
    channelKey: string
}

export interface ExternalCall {
    functionCall: FunctionCall
    httpCall: HttpCall
    channelCall: ChannelCall
}

export interface EventSelector {
    actions: Action[]
    recordSelector: BooleanExpression
    namespaces: string[]
    resources: string[]
    ids: string[]
    annotations: { [key: string]: string }
}

export interface RecordSearchParams {
    filters?: {[key: string]: string}
    query?: BooleanExpression
    limit?: number
    offset?: number
    resolveReferences?: string[]
}

export interface Event {
    id: string
    action: Action
    recordSearchParams: RecordSearchParams
    actionSummary: string
    actionDescription: string
    // resource: Resource
    // records: Record[]
    finalizes: boolean
    sync: boolean
    time: string | Date
    total: number
    actionName: string
    input: object
    output: object
    annotations: { [key: string]: string }
    error: Error
}

export interface ErrorField {
    recordId: string
    property: string
    message: string
    value: object
}

export interface Error {
    code: Code
    message: string
    fields: ErrorField[]
}

export enum Action {
    CREATE = "CREATE",
    UPDATE = "UPDATE",
    DELETE = "DELETE",
    GET = "GET",
    LIST = "LIST",
    OPERATE = "OPERATE",
}

export enum Code {
    UNKNOWN_ERROR = "UNKNOWN_ERROR",
    RECORD_NOT_FOUND = "RECORD_NOT_FOUND",
    UNABLE_TO_LOCATE_PRIMARY_KEY = "UNABLE_TO_LOCATE_PRIMARY_KEY",
    INTERNAL_ERROR = "INTERNAL_ERROR",
    PROPERTY_NOT_FOUND = "PROPERTY_NOT_FOUND",
    RECORD_VALIDATION_ERROR = "RECORD_VALIDATION_ERROR",
    RESOURCE_VALIDATION_ERROR = "RESOURCE_VALIDATION_ERROR",
    AUTHENTICATION_FAILED = "AUTHENTICATION_FAILED",
    ALREADY_EXISTS = "ALREADY_EXISTS",
    ACCESS_DENIED = "ACCESS_DENIED",
    BACKEND_ERROR = "BACKEND_ERROR",
    UNIQUE_VIOLATION = "UNIQUE_VIOLATION",
    REFERENCE_VIOLATION = "REFERENCE_VIOLATION",
    RESOURCE_NOT_FOUND = "RESOURCE_NOT_FOUND",
    UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION",
    EXTERNAL_BACKEND_COMMUNICATION_ERROR = "EXTERNAL_BACKEND_COMMUNICATION_ERROR",
    EXTERNAL_BACKEND_ERROR = "EXTERNAL_BACKEND_ERROR",
    RATE_LIMIT_ERROR = "RATE_LIMIT_ERROR",
}
