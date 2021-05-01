import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  GoogleLoginProvider,
  SocialAuthService,
  SocialUser,
} from 'angularx-social-login';
import { User } from 'src/app/models/User';
import { LoginService } from 'src/app/services/loginService/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: SocialAuthService,
    private router: Router,
    private loginService: LoginService
  ) {}

  user: SocialUser | null;
  loggedIn: boolean;

  // if user is already logged in send to home.
  ngOnInit(): void {
    if (localStorage.getItem('idToken')) {
      this.router.navigate(['/courses/all']);
    }

    this.authService.authState.subscribe(
      (user) => {
        this.user = user;
        this.loggedIn = user != null;
      },
      console.error,
      () => {
        console.log('all providers are ready');
      }
    );
  }

  signInWithGoogle(): void {
    this.authService
      .signIn(GoogleLoginProvider.PROVIDER_ID)
      .then((user: SocialUser) => {
        // sessionStorage.setItem('userID', user.id);

        localStorage.setItem('idToken', user.idToken);
        localStorage.setItem('userEmail', user.email);
        localStorage.setItem('userName', user.name);
        localStorage.setItem('photo', user.photoUrl);
        localStorage.setItem('provider', user.provider);

        // create user object for database.
        let userObj: User = new User(
          -1,
          user.provider,
          user.email,
          user.name,
          user.photoUrl,
          'Mumbai'
        );
        // check if user exists, yes cool else add to databse.
        this.loginService.Savesresponse(userObj).subscribe(
          (data: any) => {
            // data is userId returned by database.
            localStorage.setItem('userId', data);
            localStorage.setItem('userName', user.name);
            console.log(localStorage.getItem('userName'));

            console.log('return after login ', data);
            alert('Login Successfully');
            this.router.navigate([`/courses/all`]);
          },
          (error) => {
            alert("Email doesn't verified, please try again later.");
          }
        );
      });
    this.router.navigate(['/']);
  }
}
