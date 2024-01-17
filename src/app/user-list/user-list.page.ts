import { Component, OnInit } from '@angular/core';
import { HomePage } from '../home/home.page';
import { HttpClient } from '@angular/common/http';
import { Response } from '../models/Response.model';
import { User } from '../models/User.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss'],
})
export class UserListPage implements OnInit {

  homePage = HomePage;
  listUsers: User[] = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.getListUsers();
  }

  getListUsers() {
    return this.httpClient.get<Response>("https://rickandmortyapi.com/api/character").subscribe(
      (data: Response) => {
        console.log("response>>", data);
        this.listUsers = data.results;
      }
    );
  }

}
