import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../shared/user.model';

@Injectable()
export class UserService {

    constructor(private http: HttpClient){ }

    postData(user: User){
        console.log('err here');
        return this.http.post('https://localhost:44308/api/TestApi/register', user); 
    }
}