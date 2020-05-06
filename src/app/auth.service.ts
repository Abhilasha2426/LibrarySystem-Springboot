import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookResponse } from './bookResponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseURL = 'http://localhost:8080';
  isALoggedIn = false;
  isLLoggedIn = false;
  isSLoggedIn = false;
  home = true;
  constructor(private http: HttpClient) { }

  isAdminLoggedIn() {
    if (this.isALoggedIn) {
      return true;
    }
    return false;
  }

  isLibrarianLoggedIn() {
    if (this.isLLoggedIn) {
      return true;
    }
    return false;
  }

  isStudentLoggedIn() {
    if (this.isSLoggedIn) {
      return true;
    }
    return false;
  }

  // deleteStudent(books: BookResponse) {
  //   return this.http.delete<any>(`${this.baseURL}/library/librarian/deleteStudent${books.bookId}`);
  // }

  // getStudentInfo(): Observable<any> {
  //   return this.http.get<any>(`${this.baseURL}/get-all-land`);
  // }

  // updateStudent(student) {
  //   return this.http.put<any>(`${this.baseURL}/modify-Land`, student);
  // }
}
