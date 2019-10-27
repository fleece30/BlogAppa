import { Component, OnInit } from '@angular/core';

declare var test: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';
  ngOnInit(){
  }
  

  f(){
    test();
  }
}
