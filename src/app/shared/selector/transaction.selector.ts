import { map } from "rxjs/operators";
import { Transaction } from "../model/transaction.model";

export const groupByAccount = () => map<Transaction[], unknown>((list: Transaction[]) => {
    const groups: { key: string, sum: number, itens: Transaction[] }[] = [];
    list.forEach(x => {
        let group = groups.find(y => y.key === x.account.description);
        if (!group) {
            group = { key: x.account.description, sum: 0, itens: [] };
            groups.push(group);
        }
        group.itens.push(x);
        group.sum += x.value;
    });
    return groups;
});