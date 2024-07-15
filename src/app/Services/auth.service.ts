import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddUser, LoginResponse, RegisterResponse, UserLogin } from '../Models/Auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly BaseUrl = 'http://localhost/4000/Auth'
  constructor(private http:HttpClient) { }
  private isLoggedIn=false;
  logout(){
    localStorage.clear();
  }
 

  showStas(){
    const token= localStorage.getItem('token') as string;
    if(token){
      this.isLoggedIn=true;
      return true
    }
    this.isLoggedIn=false;
    return false;
  }


  registerUser(newUser:AddUser):Observable<RegisterResponse>{
    return this.http.post<RegisterResponse>(this.BaseUrl+"register", newUser)
  }
  loginUser(User:UserLogin):Observable<LoginResponse>{
    return this.http.post<LoginResponse>(this.BaseUrl+"login", User)
  }
}
