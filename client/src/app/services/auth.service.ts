import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Http2SecureServer } from 'http2';

interface UserPostResponse {
  success: boolean;
  message: string;
}
@Injectable({
  providedIn: 'root'
})

export class AuthService {

  domain = "http://localhost:8080";
  constructor(
    private http: HttpClient

  ) { }

  registerUser(user){
     return this.http.post<UserPostResponse>(this.domain + '/authentication/register', user).pipe(map(res => res));
  }
}
