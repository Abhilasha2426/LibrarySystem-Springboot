import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { LoginResponse } from '../LoginResponse';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private service: AuthService) { }

  register(registerForm: NgForm) {
    console.log(registerForm.value);
    this.http.post<LoginResponse>(`${this.service.baseURL}/library/librarian/user`, registerForm.value).subscribe(response => {
      registerForm.reset();
      if (response) {
        alert('Student Added Note this ID for Login  ' + response.id);
        this.router.navigate(['/']);
      } else {
        alert('Failed to add Student');
      }});
  }

  ngOnInit() {
  }

}
