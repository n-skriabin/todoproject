import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';

import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';

const appRoutes: Routes = [
  { path: 'auth', component: AuthenticationComponent },
  { path: 'registration', component: RegistrationComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
