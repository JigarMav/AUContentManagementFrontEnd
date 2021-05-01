import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private authService: SocialAuthService, private router: Router) {}

  ngOnInit(): void {}

  logout() {
    if (confirm('Want to logout?')) {
      localStorage.clear();
      this.authService.signOut().then((user) => {
        this.router.navigate([`/login`]);
      });
      window.location.reload();
    }
  }
}
