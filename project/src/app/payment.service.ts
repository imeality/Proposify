import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  url='http://0.0.0.0:3000/payment';

  constructor(private http:HttpClient) { }

  addUser(Fullname, mobil, mail, amont ,dat) {
    const obj = {
      Name:Fullname,
      Mobile_no:mobil,
      Email:mail,
      Amount:amont,
      Date:dat,
    };
    return this.http.post(this.url, obj)
    .subscribe(res => console.log('Done'));
  }
}
