import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { arrays } from '../../array.functions';
import { expenseTypePtBR } from '../../i18n.consts';
import { Expense } from '../../model/expense.model';

@Component({
  selector: 'app-expenses-table',
  templateUrl: './expenses-table.component.html',
  styleUrls: ['./expenses-table.component.scss']
})
export class ExpensesTableComponent implements OnInit {  
  private _expenses$ = new BehaviorSubject<Expense[]>([]);
  expensesToPay$: Observable<number>;
  expensesPaid$: Observable<number>;
  sumInvestment$: Observable<number>;
  expensesOrdered$: Observable<Expense[]>;

  @Input() set expenses(expenses: Expense[]) {
    this._expenses$.next(expenses);
  }

  expenseTypePtBR = expenseTypePtBR;

  constructor() { }

  ngOnInit(): void {
    this.orderByExpirationDayAndIsPaid();
    this.sumStats();
  }

  sort() {
    this._expenses$.next([...this._expenses$.value]);
  }

  private orderByExpirationDayAndIsPaid() {
    this.expensesOrdered$ = this._expenses$.pipe(
      map(array=> array
        .sort((a,b)=> Number(a.expirationDay)-Number(b.expirationDay))
        .sort((a,b)=> Number(a.isPaid)-Number(b.isPaid))));
  }

  private sumStats() {    
    this.expensesToPay$ = this.sumExp(x=> !x.isPaid);
    this.expensesPaid$ = this.sumExp(x=> x.isPaid && x.type === 'bill');
    this.sumInvestment$ = this.sumExp( x=> x.isPaid && x.type === 'investment');
  };

  private sumExp(predicate: (expense: Expense) => boolean) {
    return this._expenses$.pipe(map(expenses=> arrays.sum(expenses, predicate, (x: Expense) => x.value)));
  }
}
