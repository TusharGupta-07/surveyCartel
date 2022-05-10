import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(  private http : HttpClient) { }

    //add new user
    public addUser(user:any){
      return this.http.post(`${baseUrl}/user`,user);
    }
    public deleteMe(userid:any)
    {
      return this.http.delete(`${baseUrl}/user/${userid}`);
    }
  }

