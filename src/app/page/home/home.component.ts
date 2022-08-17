import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/shared/service/transaction.service';
import { map, tap } from 'rxjs/operators'
import { Account } from 'src/app/shared/model/account.model';
import { Transaction } from 'src/app/shared/model/transaction.model';
import { groupByAccount } from 'src/app/shared/selector/transaction.selector';
import { Expense } from 'src/app/shared/model/expense.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  transactions$: any;
  expenses: Expense[];

  constructor(private service: TransactionService) { }

  ngOnInit(): void {
    this.transactions$ = this.service.get().pipe(groupByAccount());
    this.expenses = [
      {
        description : "Conta de água",
        expirationDay: 15,
        isPaid: false,
        type: 'bill',
        value: 150
      },
      {
        description : "Conta de interne",
        expirationDay: 10,
        isPaid: false,
        type: 'bill',
        value: 125
      },
      {
        description : "Conta de água",
        expirationDay: 5,
        isPaid: false,
        type: 'investment',
        value: 150
      }
    ] as Expense[]
  }
}
