import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginResponse } from '../LoginResponse';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-add-librarian',
  templateUrl: './add-librarian.component.html',
  styleUrls: ['./add-librarian.component.css']
})
export class AddLibrarianComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private service: AuthService) { }

  register(registerForm: NgForm) {
    console.log(registerForm.value);
    this.http.post<LoginResponse>(`${this.service.baseURL}/library/admin/create`, registerForm.value).subscribe(response => {
      registerForm.reset();
      if (response) {
        alert('Librarian Added Note this ID for Login  ' + response.id);
        this.router.navigate(['/display-librarian']);
      } else {
        alert('Failed to add Librarian');
      }});
  }

  ngOnInit() {
  }

}
