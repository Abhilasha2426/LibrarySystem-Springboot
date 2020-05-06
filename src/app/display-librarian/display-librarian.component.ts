import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { LoginResponse } from '../LoginResponse';

@Component({
  selector: 'app-display-librarian',
  templateUrl: './display-librarian.component.html',
  styleUrls: ['./display-librarian.component.css']
})
export class DisplayLibrarianComponent implements OnInit {
  librarians: LoginResponse;
  constructor(private service: AuthService,
              private http: HttpClient) {
    this.getLibrarian();
  }

  ngOnInit() {
  }
  getLibrarian() {
    this.http.get<LoginResponse>(`${this.service.baseURL}/library/admin/displayLibrarian`).subscribe(response => {
      this.librarians = response;
      console.log(this.librarians);
    });
  }

  deleteLibrarian(librarian) {
    this.http.delete(`${this.service.baseURL}/library/admin/deleteLibrarian/${librarian.id}`).subscribe(resData => {
      if (resData) {
        // alert('Librarian Deleted Successfully');
        console.log(resData);
        this.getLibrarian();
      } else {
        alert('Failed to Delete Librarian');
      }
    }, err => {
      console.log(err);
    });
  }
}
