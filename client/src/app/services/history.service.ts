import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  options;
  domain = this.authService.domain;

  constructor(
    private authService: AuthService,
    private http: HttpClient
  ) { }

  createAuthenticationHeaders(){
    this.authService.loadToken();
    this.options = new HttpResponse({
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'authorization': this.authService.authToken
      })
    });
  }

  newBlog(blog){
    this.createAuthenticationHeaders();
    return this.http.post(this.domain + '/blogs/newBlog', blog, this.options).pipe(map(res => res));
  }

  getAllBlogs(){
    this.createAuthenticationHeaders();
    return this.http.get(this.domain + '/blogs/allBlogs', this.options).pipe(map((res: any) => res));
  }

  getSingleBlog(id){
    this.createAuthenticationHeaders();
    return this.http.get(this.domain + '/blogs/singleBlog/' + id, this.options).pipe(map((res: any) => res));
  }
  editBlog(blog){
    this.createAuthenticationHeaders();
    return this.http.put(this.domain + '/blogs/updateBlog',blog,this.options).pipe(map((res: any) => res));
  }

  deleteBlog(id){
    this.createAuthenticationHeaders();
    return this.http.delete(this.domain + '/blogs/deleteBlog/' + id,this.options).pipe(map((res: any) => res));
  }
}
