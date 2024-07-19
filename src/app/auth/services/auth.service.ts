import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticatedUser: boolean = true;

  constructor() {}

  login() {
    this.isAuthenticatedUser = true;
  }

  logout() {
    this.isAuthenticatedUser = false;
  }

  isAuthenticated(): boolean {
    return this.isAuthenticatedUser;
  }
}
