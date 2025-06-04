export interface Item {
    confidence: number,
    id: string,
    mentionId: string,
    mentionText: string,
    normalizedValue: string,
    properties: Item[],
    type: string
}