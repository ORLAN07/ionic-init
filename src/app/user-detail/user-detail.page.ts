import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/User.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.page.html',
  styleUrls: ['./user-detail.page.scss'],
})
export class UserDetailPage implements OnInit {

  user: User = new User();

  constructor(private activatedRoute: ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit() {
    let idUser: number = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.getUserDetail(idUser);
  }

  getUserDetail(id: number) {
    this.httpClient.get<User>("https://rickandmortyapi.com/api/character/"+id).subscribe(
      (response: User) => {
        console.log("user detialas>>", response);
        this.user = response;
      }
    )
  } 

}
