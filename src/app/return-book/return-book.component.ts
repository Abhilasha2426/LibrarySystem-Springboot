import { Component, OnInit } from '@angular/core';
import { BookTransactionResponse } from '../book-transaction-response';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-return-book',
  templateUrl: './return-book.component.html',
  styleUrls: ['./return-book.component.css']
})
export class ReturnBookComponent implements OnInit {

  bookData: BookTransactionResponse;
  constructor(private http: HttpClient,
              private router: Router,
              private service: AuthService) { }

  id = null;

  ngOnInit() {
  }

  getBookInfo(bookInfo: NgForm) {
    this.http.get<BookTransactionResponse>(`${this.service.baseURL}/library/librarian/getIssuedInfo/${bookInfo.value.id}`)
      .subscribe(response => {
        if (response != null) {
          alert('Student Data Found');
        } else {
          alert('No Student Data Present for ID ' + bookInfo.value.id);
        }
        this.bookData = response;
        console.log(response);
      });
  }

  returnBook(id) {
    this.http.delete(`${this.service.baseURL}/library/librarian/returnBook/${id}`)
      .subscribe(response => {
        if (response) {
          alert('Book Returned Successfully');
          this.router.navigate(['/']);
          console.log(response);
        } else {
          alert('Failed to Return the Book');
          this.router.navigate(['/']);
        }
      });

  }

}
