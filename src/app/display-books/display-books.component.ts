import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { BookResponse } from '../bookResponse';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-books',
  templateUrl: './display-books.component.html',
  styleUrls: ['./display-books.component.css']
})
export class DisplayBooksComponent implements OnInit {
books: BookResponse;
 constructor(private service: AuthService,
            private router: Router,
             private http: HttpClient) {
    this.getData();
  }

  ngOnInit() {
  }
  getData() {
    this.http.get<BookResponse>(`${this.service.baseURL}/library/librarian/getBooks`).subscribe(response => {
      this.books = response;
      console.log(this.books);
    });
  }


  deleteLibrarian(books) {
    this.http.delete(`${this.service.baseURL}/library/librarian/${books.bookid}`)
      .subscribe(response => {
        if (response) {
          // alert('Student Deleted Successfully');
          this.router.navigate(['/']);
          console.log(response);
        } else {
          alert('Failed to delete Book');
          this.router.navigate(['/']);
        }
      });

  }

}
