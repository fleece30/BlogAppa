import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import {HttpHeaders, HttpResponse}  from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { search } from '../../searchterm';
import { Router } from '@angular/router';

import { symptoms } from '../../symptoms';

declare var test: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  

  myForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {

    this.createForm();
   }

   

  createForm(){
    this.myForm = this.formBuilder.group({
      search: ''
    });
  }

  

  f(){
    new test();
  }
  ngOnInit() {
  }

}
