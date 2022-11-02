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
  submitsignup(data:any){
    // console.log(data);
        let url = `${this.baseUrl}/signup`;  
        return this.http.post<any>(url,{data});
  
        
      }
    }
  

