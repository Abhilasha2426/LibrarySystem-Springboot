import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { LoginResponse } from '../LoginResponse';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient,
              private service: AuthService,
              private router: Router) { }

  login(loginForm: NgForm) {
    console.log(loginForm);
    this.http.post<LoginResponse>(`${this.service.baseURL}/library/login/`, loginForm)
      .subscribe(response => {
        if (response != null && response.type === 'Admin') {
          // window.confirm(' Welcome  ' + response.name);
          this.router.navigate(['/']);
          this.service.isALoggedIn = true;
        } else if (response != null && response.type === 'Librarian') {
          // window.confirm(' Welcome  ' + response.name);
          this.router.navigate(['/']);
          this.service.isLLoggedIn = true;
        } else if (response != null && response.type === 'Student') {
          // window.confirm(' Welcome  ' + response.name);
          this.router.navigate(['/']);
          this.service.isSLoggedIn = true;
        } else {
          window.confirm('Login Failed');
        }
      });
  }
  ngOnInit() {
  }

}
