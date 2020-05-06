import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { RegistrationResponse } from '../registrationResponse';
import { BookTransactionResponse } from '../book-transaction-response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-request',
  templateUrl: './view-request.component.html',
  styleUrls: ['./view-request.component.css']
})
export class ViewRequestComponent implements OnInit {
  requests: RegistrationResponse;
  acceptedRequest: BookTransactionResponse;
  constructor(private service: AuthService,
              private http: HttpClient,
              private router: Router) {
    this.getRequest();
  }
  getRequest() {
    this.http.get<RegistrationResponse>(`${this.service.baseURL}/library/librarian/viewRequest`).subscribe(response => {
      this.requests = response;
      console.log(this.requests);
    });
  }

  acceptRequest(request) {
    this.http.get<BookTransactionResponse>(`${this.service.baseURL}/library/librarian/acceptRequest/${request.registrationId}`)
      .subscribe(response => {
        if (response != null) {
          alert('Request Accepted');
          this.updateRequest(request);
          this.getRequest();
          this.acceptedRequest = response;
         // this.router.navigate(['/issued-book']);
          console.log(this.acceptedRequest);
        } else {
          alert('Request rejected');
        }
      });
  }
  denyRequest(request) {
    this.http.delete(`${this.service.baseURL}/library/librarian/denyRequest/${request.registrationId}`)
      .subscribe(response => {
        if (response) {
          this.getRequest();
          alert('Request denied');
          this.getRequest();
        }
      });
  }

  updateRequest(request) {
    this.http.delete(`${this.service.baseURL}/library/librarian/denyRequest/${request.registrationId}`)
      .subscribe(response => {
        if (response) {
          this.getRequest();
        }
      });
  }
  ngOnInit() {
  }

}
