import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HistoryService } from '../../../services/history.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {


  blog={
    title: String,
    body: String
  }
  form: FormGroup;
  currentURL;
  loading=false;
  constructor(
    private location : Location,
    private activatedRoute : ActivatedRoute,
    private historyService : HistoryService,
    private router : Router
  ) { }

  updateBlogSubmit(){
    this.historyService.editBlog(this.blog).subscribe(data => {
      setTimeout(() => {
        this.router.navigate(['/history']);
      },2000);
    });
  }
  goBack(){
    this.location.back();
  }

  ngOnInit() {
    this.currentURL = this.activatedRoute.snapshot.params;
    this.historyService.getSingleBlog(this.currentURL.id).subscribe(data =>{
    this.blog = data.blogs;
    });
  }

}
