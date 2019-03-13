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



/*
  getAlllogins(): Observable<login[]> {
    return this.http.get<login[]>('http://localhost:3000/signup');
  }

  getlogin(name: string): Observable<login> {
    return this.http.get<login>('http://localhost:3000/signup/' + name);
  }

  insertlogin(login: login): Observable<login> {
    return this.http.post<login>('http://localhost:3000/signup', login);
  }

  updatelogin(login: login): Observable<void> {
    return this.http.put<void>('http://localhost:3000/signup' + login.Email, login);
  }

*/

