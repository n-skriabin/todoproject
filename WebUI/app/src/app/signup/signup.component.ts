import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  recaptchaIsCompleted: boolean = false;
  buttonWasPressed: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  resolved(captchaResponse: string) {
    if(captchaResponse != null){
      $("#submit").css('background','#ffb94b');
      this.recaptchaIsCompleted = true;
    }
  }

  signUpButton(){
    this.buttonWasPressed = true;
    if(!this.recaptchaIsCompleted){
      $('#login').css('height','450px');
    }
  }
}
