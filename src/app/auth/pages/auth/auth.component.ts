import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginComponent } from '@app/auth/components/login/login.component';
import { RegisterComponent } from '@app/auth/components/register/register.component';
import { AuthService } from '@app/auth/services/auth.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [LoginComponent, RegisterComponent, CommonModule],
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  selectedTab = 'login';

  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService) {}

  ngOnInit() {
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        this.selectedTab = fragment;        
      }
    });
  }

  switchTab(tab: string) {
    this.selectedTab = tab;
    this.router.navigate([], { fragment: tab });
  }

  submit() {
    console.log('submit');
    
  }
}
