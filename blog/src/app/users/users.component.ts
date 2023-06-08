import { Component, OnInit } from '@angular/core';
import { UsersService } from "../service/users/users.service"
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  users: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/users')
        .subscribe((response) => {
            this.users = response
      });
  }

}
