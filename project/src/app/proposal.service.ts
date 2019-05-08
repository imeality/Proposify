import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProposalService {

  url1='http://0.0.0.0:3000/client';
  url2='http://0.0.0.0:3000/company';

  constructor(private http:HttpClient) { }

  getUser(){
    return this.http.get(this.url1);
  }

  addUser1(Client_name,Client_address,Client_country,Client_state,Client_city ,Client_mob1,Client_mob2) {
    const obj = {
      Client_name:Client_name,
      Client_address:Client_address,
      Client_country:Client_country,
      Client_state:Client_state,
      Client_city:Client_city,
      Client_mob1:Client_mob1,
      Client_mob2:Client_mob2,
    };
    return this.http.post(this.url1, obj)
    .subscribe(res => console.log('Done'));
  }

  addUser2(Company_name,Company_email,Company_address,Company_country,Company_state ,Company_city,Date) {
    const obj = {
      Company_name:Company_name,
      Company_email:Company_email,
      Company_address:Company_address,
      Company_country:Company_country,
      Company_state :Company_state ,
      Company_city:Company_city,
      Date:Date,
    };
    return this.http.post(this.url2, obj)
    .subscribe(res => console.log('Done'));
  }
}
