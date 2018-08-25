import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { User } from '../shared/user.model';
import * as $ from 'jquery';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [ UserService ]
})
export class SignupComponent implements OnInit {
  recaptchaIsCompleted: boolean = false;
  buttonWasPressed: boolean = false;
  userPostModel: User = {Email: "example", Password: "example", ConfirmPassword: "example"};
  constructor(private httpService: UserService) { }

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
      return;
    }

    this.submit();
  }

  submit(){ 
    this.httpService.postData(this.userPostModel)
            .subscribe(
                (data: User) => { console.log("hell yeah!!!") },
                error => console.log(error)
            );
}
}
