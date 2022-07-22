import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { 

  }

  // add user
  public addUser(user: any)
  {
    return this.http.post(`${baseUrl}/users/`, user);
  }

  public getUsers() {
    return this.http.get(`${baseUrl}/users/`);
  }

  public validateUser(user:any) {
    return this.http.post(`${baseUrl}/users/login/`, user);
  }
}
