import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isTrainer: boolean = false;
  isCreator: boolean = false;
  constructor(private authService: SocialAuthService, private router: Router) {}

  ngOnInit(): void {
    if (localStorage.getItem('isTrainer') === 'true') {
      this.isTrainer = true;
    }
  }

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
