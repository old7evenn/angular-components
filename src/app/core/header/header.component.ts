import { Component, signal } from '@angular/core';
import { SearchComponent } from '../../youtube/search/search.component';
import { AuthService } from '@app/auth/services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SearchComponent, CommonModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {

  currentUser = signal(this.authService.getCurrentUser()());
  constructor(private authService: AuthService) {}

}
