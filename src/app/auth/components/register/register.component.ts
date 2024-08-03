import { Component, Input } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '@app/auth/services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [InputComponent, FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  userData: FormGroup;
  @Input() switchTab?: (tab: 'login' | 'register') => void;

  constructor(private router: Router, private authService: AuthService) {
    this.userData = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  onSubmit() {
    if (this.userData.valid) {
      this.authService.register(this.userData.value);
      this.router.navigate(['/home']);
    }
  }
}
