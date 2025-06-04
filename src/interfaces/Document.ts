import { Item } from "./Item"

export interface ReceiptDocument {
    chunkedDocument: string,
    documentLayout: string,
    entities: Item[],
    entityRelations: object[],
    error: Error,
    pages: object[],
    revisions: object[],
    shardInfo: string,
    source: string,
    text: string
}