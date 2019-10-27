import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { HistoryService } from '../../services/history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  newBlog=false;
  loadingBlogs=false;
  form: FormGroup;
  username; 
  messageClass;
  message;
  blogPosts;
  blogs={
    title: String,
    body: String
  }

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private historyService: HistoryService
  ) { 
    this.newHistoryForm();
  }

  newHistoryForm(){
    this.form=this.formBuilder.group({
      title: '',
      body: ''
    });
  }

  newPost(){
    this.newBlog=true;
  }
  reloadPosts(){
    this.loadingBlogs=true;
    this.getAllBlogs();
    setTimeout(()=>{
      this.loadingBlogs=false; 
    },4000);
  }

  goBack(){
    window.location.reload();
  }

  onBlogSubmit(){
    const blog = {
      title: this.form.get('title').value,
      body: this.form.get('body').value,
      createdBy: this.username
    }

    this.historyService.newBlog(blog).subscribe(data => {
      this.getAllBlogs();
        setTimeout(()=>{
          this.newBlog=false;
          this.form.reset();
        },2000)
    });

  }

  getAllBlogs(){
    this.historyService.getAllBlogs().subscribe(data => {
      this.blogPosts = data.blogs;
    })
  }

  ngOnInit() {
    var returned=localStorage.getItem('user');
    var parsed=JSON.parse(returned);
    this.username=parsed.username;
    this.getAllBlogs();
  }

}
