import { Component, OnInit } from '@angular/core';
import { BookResponse } from '../bookResponse';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-request-book',
  templateUrl: './request-book.component.html',
  styleUrls: ['./request-book.component.css']
})
export class RequestBookComponent implements OnInit {
books: BookResponse;


  constructor(private http: HttpClient,
              private service: AuthService,
              private router: Router) { }

  searchBook(requestForm: NgForm) {
    this.http.post<BookResponse>(`${this.service.baseURL}/library/librarian/getBooks/`, requestForm.value)
    .subscribe(response => {
      if (response != null) {
      this.books = response;
      console.log(this.books);
      // alert('Books fetched successfully');
      } else {
        alert('No books found with ' + requestForm.value.bookName + ' and ' + requestForm.value.author1);
      }
    });
  }

  requestBook(book) {
    this.http.get(`${this.service.baseURL}/library/student/book/requset/${book.bookId}`)
    .subscribe(response => {
      if (response) {
        alert('Requested Succefully');
      }
    });
  }
  ngOnInit() {
  }

}
