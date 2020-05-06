import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddLibrarianComponent } from './add-librarian/add-librarian.component';
import { DisplayLibrarianComponent } from './display-librarian/display-librarian.component';
import { AddBookComponent } from './add-book/add-book.component';
import { DisplayBooksComponent } from './display-books/display-books.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { ViewRequestComponent } from './view-request/view-request.component';
import { RequestBookComponent } from './request-book/request-book.component';
import { DeleteStudentComponent } from './delete-student/delete-student.component';
import { ReturnBookComponent } from './return-book/return-book.component';
import { IssuedBookComponent } from './issued-book/issued-book.component';
import { RequestStatusComponent } from './request-status/request-status.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'add-librarian', component: AddLibrarianComponent},
  {path: 'display-librarian', component: DisplayLibrarianComponent},
  {path: 'add-student', component: AddStudentComponent},
  {path: 'delete-student', component: DeleteStudentComponent},
  {path: 'add-book', component: AddBookComponent},
  {path: 'display-book', component: DisplayBooksComponent},
  {path: 'view-request', component: ViewRequestComponent},
  {path: 'issued-book', component: IssuedBookComponent},
  {path: 'return-book', component: ReturnBookComponent},
  {path: 'request-book', component: RequestBookComponent},
  {path: 'request-status', component: RequestStatusComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
