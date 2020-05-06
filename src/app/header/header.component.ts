import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private service: AuthService,
              private router: Router) { }

  ngOnInit() {
  }
  get isALoggedIn() {
    return this.service.isAdminLoggedIn();
  }

  get isLLoggedIn() {
    return this.service.isLibrarianLoggedIn();
  }

  get isSLoggedIn() {
    return this.service.isStudentLoggedIn();
  }

  logout() {
    this.service.isALoggedIn = false;
    this.service.isLLoggedIn = false;
    this.service.isSLoggedIn = false;
    this.router.navigate(['/login']);
  }
}
