import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AddLibrarianComponent } from './add-librarian/add-librarian.component';
import { DisplayLibrarianComponent } from './display-librarian/display-librarian.component';
import { AddBookComponent } from './add-book/add-book.component';
import { FooterComponent } from './footer/footer.component';
import { DisplayBooksComponent } from './display-books/display-books.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { AddStudentComponent } from './add-student/add-student.component';
import { ViewRequestComponent } from './view-request/view-request.component';
import { RequestBookComponent } from './request-book/request-book.component';
import { DeleteStudentComponent } from './delete-student/delete-student.component';
import { RequestStatusComponent } from './request-status/request-status.component';
import { IssuedBookComponent } from './issued-book/issued-book.component';
import { ReturnBookComponent } from './return-book/return-book.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AddLibrarianComponent,
    DisplayLibrarianComponent,
    AddBookComponent,
    FooterComponent,
    DisplayBooksComponent,
    PageNotFoundComponent,
    LoginComponent,
    AddStudentComponent,
    ViewRequestComponent,
    RequestBookComponent,
    DeleteStudentComponent,
    RequestStatusComponent,
    IssuedBookComponent,
    ReturnBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
