import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/shared/service/transaction.service';
import { map, tap } from 'rxjs/operators'
import { Account } from 'src/app/shared/model/account.model';
import { Transaction } from 'src/app/shared/model/transaction.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  transactions$: any;

  constructor(private service: TransactionService) { }

  ngOnInit(): void {
    this.transactions$ = this.service.get().pipe(
      map(list=> {
        const groups: { key: string, sum: number, itens: Transaction[] }[] = [];
        list.forEach(x=> {
          let group = groups.find(y=>y.key === x.account.description);
          if(!group){
            group = { key: x.account.description, sum: 0, itens: [] };
            groups.push(group);
          }
          group.itens.push(x);
          group.sum += x.value;
        });
        return groups;
      }),
    );
  }

}
