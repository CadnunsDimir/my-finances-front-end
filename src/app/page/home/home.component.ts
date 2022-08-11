import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/shared/service/transaction.service';
import { tap } from 'rxjs/operators'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  transactions$: any;

  constructor(private service: TransactionService) { }

  ngOnInit(): void {
    this.transactions$ = this.service.get().pipe(tap(console.log));
  }

}
