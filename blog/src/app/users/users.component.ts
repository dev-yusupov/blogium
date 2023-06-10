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
  
  url = 'https://jsonplaceholder.typicode.com/users'
  

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.url)
        .subscribe((response) => {
            this.users = response
            console.log(typeof this.users)
      });
  }

  deleteUser(id: number) {
  //   this.http.delete('https://jsonplaceholder.typicode.com/users/${id}')
  //     .subscribe(
  //       (response) => {
  //         var idx = this.users.indexOf(id)
  //         console.log(idx)
  //       }
  //     );
  // }
    console.log(id)
    
  }
}
