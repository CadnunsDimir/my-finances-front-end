export type ExpenseType = 'investment' | 'bill';

export interface Expense {
    description: string,
    value: number,
    expirationDay: number,
    isPaid: boolean,
    type: ExpenseType
}