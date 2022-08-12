import { Account } from "./account.model";

export interface Transaction {
    date: Date,
    value: number,
    description: string,
    account: Account
}