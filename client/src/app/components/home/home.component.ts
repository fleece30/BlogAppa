import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

declare var test: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder
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
