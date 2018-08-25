import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RecaptchaModule } from 'ng-recaptcha';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { HttpClientModule } from '@angular/common/http'; 

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(
      appRoutes // <-- debugging purposes only
    ),
    RecaptchaModule.forRoot(), // Keep in mind the "forRoot"-magic nuances!
    // RecaptchaFormsModule, // if you need forms support
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
