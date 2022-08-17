import { Component, Input, OnInit } from '@angular/core';
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

  @Input() set expenses(expenses: Expense[]) {
    this._expenses = this.orderByExpirationDayAndIsPaid(expenses);
    this.sumUnpaidValue();
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
    this.sumUnpaidValue();
  }

  private orderByExpirationDayAndIsPaid(expenses: Expense []) {
    return (expenses || [])
      .sort((a,b)=> Number(a.expirationDay)-Number(b.expirationDay))
      .sort((a,b)=> Number(a.isPaid)-Number(b.isPaid));
  }

  private sumUnpaidValue() {
    this.expensesToPay = 0;
    this._expenses.forEach(expense=> {
      if(!expense.isPaid)
        this.expensesToPay+= expense.value;
    })
  }
}
