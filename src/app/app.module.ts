import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// store
import { Store } from '../store';

// feature modules
import { AuthModule } from './auth/auth.module';

// routes
export const ROUTES: Routes = [];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    Store
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*
var config = {
    apiKey: "AIzaSyCwsjPTUUKj-6Mt9vC656MJKOk5AY_81Qs",
    authDomain: "angular2-course-a8e4b.firebaseapp.com",
    databaseURL: "https://angular2-course-a8e4b.firebaseio.com",
    projectId: "angular2-course-a8e4b",
    storageBucket: "angular2-course-a8e4b.appspot.com",
    messagingSenderId: "829202919005"
  };
  */
