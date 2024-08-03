import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { InputComponent } from '@app/auth/components/input/input.component';
import { AuthService } from '@app/auth/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  userData: FormGroup;
  error = '';

  @Input() switchTab?: (tab: 'login' | 'register') => void;

  constructor(private authService: AuthService, private router: Router) {
    this.userData = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  onSubmit() {
    if (this.userData.valid) {
      const loginError = this.authService.login(this.userData.value);
      if (!loginError) {
        this.router.navigate(['/home']);
      } 
    }
  }
}
