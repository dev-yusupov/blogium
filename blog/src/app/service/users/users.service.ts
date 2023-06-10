import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url = "https://jsonplaceholder.typicode.com/users"
  

  constructor(private http: HttpClient) { }

  getAllUsers() {
    this.http.get(this.url)
  }

  

}
