import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  url1='http://0.0.0.0:3000/user';
  url2='http://0.0.0.0:3000/education';
  url3='http://0.0.0.0:3000/job';

  constructor(private http:HttpClient) { }

getUser(){
    return this.http.get(this.url1);
  }

  addUser1(Name,DOB,Age,Mobile_no,Email,Address,Country,State,City) {
    const obj = {
      Name:Name,
      DOB:DOB,
      Age:Age,
      Mobile_no:Mobile_no,
      Email:Email,
      Address:Address,
      Country:Country,
      State:State,
      City:City,
    };
    return this.http.post(this.url1, obj)
    .subscribe(res => console.log('Done'));
  }

  addUser2(Email,tenth_school,tenth_per,tenth_Passingyear,twelth_school ,twelth_per,twelth_Passingyear,Graduation_Collage,Graduation_Stream,Graduation_per,Graduation_Passingyear,PG_collage,PG_Stream,PG_per,PG_Passingyear) {
    const obj = {
      Email:Email,
      tenth_school:tenth_school,
      tenth_per:tenth_per,
      tenth_Passingyear:tenth_Passingyear,
      twelth_school :twelth_school ,
      twelth_per:twelth_per,
      twelth_Passingyear:twelth_Passingyear,
      Graduation_Collage:Graduation_Collage,
      Graduation_Stream:Graduation_Stream,
      Graduation_per:Graduation_per,
      Graduation_Passingyear:Graduation_Passingyear,
      PG_collage:PG_collage,
      PG_Stream:PG_Stream,
      PG_per:PG_per,
      PG_Passingyear:PG_Passingyear,
    };
    console.log(Email,tenth_school,tenth_per,tenth_Passingyear,twelth_school ,twelth_per,twelth_Passingyear,Graduation_Collage,Graduation_Stream,Graduation_per,Graduation_Passingyear,PG_collage,PG_Stream,PG_per,PG_Passingyear);
    return this.http.post(this.url2, obj)
    .subscribe(res => console.log('Done'));
  }
    
  addUser3(Email,Company_name,Job_profile,Experience,Start_date,End_date,Achivement,Skills,Languages,Hobbies) {
    const obj = {
      Email:Email,
      Company_name:Company_name,
      Job_profile:Job_profile,
      Experience:Experience,
      Start_date:Start_date,
      End_date:End_date,
      Achivement:Achivement,
      Skills:Skills,
      Languages:Languages,
      Hobbies:Hobbies
     
      };
    return this.http.post(this.url3, obj)
        .subscribe(res => console.log('Done'));
    }
}
