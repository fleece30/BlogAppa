import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

const helper = new JwtHelperService();

interface UserPostResponse {
  success: boolean;
  message: string;
  token: string;
  user: string;
}
@Injectable({
  providedIn: 'root'
})

export class AuthService {

  domain = "http://localhost:8080";
  authToken;
  user;
  options;
  constructor(
    private http: HttpClient
  ) { }

  createAuthenticationHeaders(){
    this.loadToken();
    this.options = new HttpResponse({
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'authorization': this.authToken
      })
    });
  }

  loadToken(){
    const token = localStorage.getItem('token');
    this.authToken=token;
  }

  registerUser(user){
    return this.http.post<UserPostResponse>(this.domain + '/authentication/register', user).pipe(map(res => res));
  }

  login(user){
    return this.http.post<UserPostResponse>(this.domain + '/authentication/login', user).pipe(map(res => res));
  }

  storeUserData(token, user){
    localStorage.setItem('token',token);
    localStorage.setItem('user',JSON.stringify(user));
    this.authToken = token;
    this.user = user;  
  }
  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  loggedIn(){ 
    return helper.isTokenExpired(this.authToken);
  }
}
