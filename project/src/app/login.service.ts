import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
/*export interface login {
  Email: string;
  Password: string;
}*/

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url='http://localhost:3000/signup';
  username : string;
  logged : boolean;

  constructor(private http:HttpClient) { }

  getUser(){
    return this.http.get(this.url);
  }


addUser(Fname, Lname, Email ,Mobile_no ,Password) {
  const obj = {
    Fname: Fname,
    Lname: Lname,
    Email: Email,
    Mobile_no:Mobile_no,
    Password:Password
    };
 return this.http.post(this.url, obj)
      .subscribe(res => console.log('Done'));
  }
}

