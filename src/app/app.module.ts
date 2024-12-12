import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';


@NgModule({
  declarations: [
  ],
  imports: [
    LoginComponent,
    AppComponent,
    CommonModule,
    BrowserModule,
    FormsModule // Add FormsModule here
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
