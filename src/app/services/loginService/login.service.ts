import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/models/User';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private baseURL = environment.baseUrl;
  user: User;

  constructor(private httpClient: HttpClient, private router: Router) {}

  public Savesresponse(response: any) {
    // this.http.get(this.baseURL + response.email).subscribe((user) => {
    //   this.user = user;
    //   console.log(this.user);
    //   sessionStorage.setItem('userId', this.user.userID);
    // }
    console.log('service ', response);

    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = {
      headers: httpHeaders,
    };
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/json; charset=utf-8'
    );
    const body = response;
    return this.httpClient.post(this.baseURL + '/user/login', body, options);
    // console.log('LoginService', response);
  }
  getUserById() {
    let id = Number(localStorage.getItem('userId'));

    this.httpClient
      .get(this.baseURL + `/user/get/${id}`)
      .subscribe((data: User) => {
        this.user = data;
      });
    return this.user;
  }
}
