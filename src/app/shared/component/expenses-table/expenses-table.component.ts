import { Component, Input, OnInit } from '@angular/core';
import { arrays } from '../../array.functions';
import { expenseTypePtBR } from '../../i18n.consts';
import { Expense } from '../../model/expense.model';

@Component({
  selector: 'app-expenses-table',
  templateUrl: './expenses-table.component.html',
  styleUrls: ['./expenses-table.component.scss']
})
export class ExpensesTableComponent implements OnInit {
  
  private _expenses: Expense[];
  expensesToPay: number;
  expensesPaid: number;
  sumInvestment: number;

  @Input() set expenses(expenses: Expense[]) {
    this._expenses = this.orderByExpirationDayAndIsPaid(expenses);
    this.sumStats();
  }

  expenseTypePtBR = expenseTypePtBR;

  constructor() { }

  ngOnInit(): void {
  }

  get hasValue() {
    return this._expenses && this._expenses.length;
  }

  sort() {
    this._expenses = this.orderByExpirationDayAndIsPaid(this._expenses);
    this.sumStats();
  }

  private orderByExpirationDayAndIsPaid(expenses: Expense []) {
    return (expenses || [])
      .sort((a,b)=> Number(a.expirationDay)-Number(b.expirationDay))
      .sort((a,b)=> Number(a.isPaid)-Number(b.isPaid));
  }

  private sumStats() {
    const selectValue = (x: Expense) => x.value;
    this.expensesToPay = arrays.sum(this._expenses, x=> !x.isPaid, selectValue);
    this.expensesPaid = arrays.sum(this._expenses, x=> x.isPaid && x.type === 'bill', selectValue);
    this.sumInvestment = arrays.sum(this._expenses, x=> x.isPaid && x.type === 'investment', selectValue);
  };
}
