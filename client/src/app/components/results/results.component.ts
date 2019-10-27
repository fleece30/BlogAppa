import { Component, OnInit } from '@angular/core';
import { symptoms } from '../../symptoms';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  ailments: symptoms[];
  error='';
  success='';

  constructor(
  ) { }

  ngOnInit() {
  }


}
