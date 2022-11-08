import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor( public http:HttpClient) { }
  baseUrl: string = 'http://localhost:5000/api/user';

  onsubmitLogin(user:any){
        let url = `${this.baseUrl}/login`;
        return this.http.post<any>(url,{user});
     
      }
  submitsignup(data:any,otp:any){
    // console.log(data);
        let url = `${this.baseUrl}/signup/`+ otp;  
        return this.http.post<any>(url,{data});
        
  }
  sendOTP(item:any,otp:any){
    let url = `${this.baseUrl}/sendOTP/`+ otp;
    return this.http.post<any>(url,{item});
  }
  getUserById(userId:any){
    let url = `${this.baseUrl}/getUserById/`+ userId;
    return this.http.get(url);
  }

  verifyOTP(item:any){
    let url = `${this.baseUrl}/verifyOTP`;
    return this.http.put(url,{item});
  }

  nickname( item:any,userId:any){
    let url = `${this.baseUrl}/savename/`+ userId;
    return this.http.put(url,{item});

  }

  checkname(name:any)
  {
    let url = `${this.baseUrl}/checkName/`+ name;
    return this.http.get(url);

  }

    }
  

