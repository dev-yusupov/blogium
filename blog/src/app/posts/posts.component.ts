import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  
  posts: any;
  users: any;
  user: any;

  url = "https://jsonplaceholder.typicode.com/posts";
  userurl = "https://jsonplaceholder.typicode.com/users";

  constructor(private http: HttpClient) { }


  ngOnInit() {
    this.http.get(this.url) 
      .subscribe((response) => {
        this.posts = response
      })
  }

  getUserName(id: number) {
    const username = this.http.get("https://jsonplaceholder.typicode.com/users/" + id)
    .subscribe((response) => {
      this.user = response
      return this.user.username
    })
  }

}
