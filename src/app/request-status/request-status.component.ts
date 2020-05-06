import { Component, OnInit } from '@angular/core';
import { BookTransactionResponse } from '../book-transaction-response';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-request-status',
  templateUrl: './request-status.component.html',
  styleUrls: ['./request-status.component.css']
})
export class RequestStatusComponent implements OnInit {

  transactions: BookTransactionResponse;
 constructor(private service: AuthService,
             private http: HttpClient) {
  }

  id = null;

  ngOnInit() {
  }

  getRequestStatusInfo(requestStatusInfo: NgForm) {
    this.http.get<BookTransactionResponse>(`${this.service.baseURL}/library/student/book/requsetStatus/${requestStatusInfo.value.id}`)
      .subscribe(response => {
        if (response != null) {
          alert('Request Accepted Succefully');
        } else {
          alert('Request denyed for ID ' + requestStatusInfo.value.id);
        }
        this.transactions = response;
        console.log(response);
      });
  }

}
