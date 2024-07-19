import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputComponent } from '@app/auth/components/input/input.component';
import { AuthService } from '@app/auth/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, InputComponent],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(private authService: AuthService) {}
  login() {
    this.authService.login()    
  }
  value = ''
}
