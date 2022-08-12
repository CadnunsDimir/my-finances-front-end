import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from '../model/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  url = "http://localhost:8080/api/bank/transaction";

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Transaction[]>(this.url);
  }
}
