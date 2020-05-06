import { Component, OnInit } from '@angular/core';
import { LoginResponse } from '../LoginResponse';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css']
})
export class DeleteStudentComponent implements OnInit {

  studentData: LoginResponse;
  constructor(private http: HttpClient,
              private router: Router,
              private service: AuthService) { }

  id = null;

  ngOnInit() {
  }

  getStudentInfo(deleteStuduent: NgForm) {
    this.http.get<LoginResponse>(`${this.service.baseURL}/library/librarian/getStudent/${deleteStuduent.value.id}`)
      .subscribe(response => {
        if (response != null) {
          // alert('Student Data Found');
        } else {
          alert('No Student Data Present for ID ' + deleteStuduent.value.id);
        }
        this.studentData = response;
        console.log(response);
      });
  }

  deleteStudent(id) {
    this.http.delete(`${this.service.baseURL}/library/librarian/deleteStudent/${id}`)
      .subscribe(response => {
        if (response) {
          // alert('Student Deleted Successfully');
          this.router.navigate(['/']);
          console.log(response);
        } else {
          alert('Failed to delete the Student');
          this.router.navigate(['/']);
        }
      });

  }

}
