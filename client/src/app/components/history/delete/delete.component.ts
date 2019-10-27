import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../../../services/history.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  foundBlog = false;
  blog;
  currentURL;
  form;

  constructor(
    private historyService : HistoryService,
    private activatedRoute : ActivatedRoute,
    private router : Router
  ) { }

  deleteBlog(){
    this.historyService.deleteBlog(this.currentURL.id).subscribe(data => {
      setTimeout(() => {
        this.router.navigate(['/history']);
      },2000);
    });
  }

  ngOnInit() {
    this.currentURL = this.activatedRoute.snapshot.params;
    this.historyService.getSingleBlog(this.currentURL.id).subscribe(data => {
      this.blog = {
        title: data.blogs.title,
        body: data.blogs.title,
        createdBy: data.blogs.createdBy,
        createdAt: data.blogs.createdAt
      };
      this.foundBlog = true;
    });
  }

}
