import { Injectable, signal, WritableSignal } from '@angular/core';

export interface User {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSignal: WritableSignal<User | null> = signal<User | null>(
    null
  );
  private isAuthenticatedUserSignal: WritableSignal<boolean> = signal(false);

  constructor() {
    this.initializeAuthState();
  }

  private async initializeAuthState() {
    const storedCurrentUser = localStorage.getItem('currentUser');
    if (storedCurrentUser) {
      const currentUser = JSON.parse(storedCurrentUser) as User;
      this.currentUserSignal.set(currentUser);
      this.isAuthenticatedUserSignal.set(true);
    }
  }

  async login(user: User): Promise<string | null> {
    try {
      const users = await this.getUsers();
      const authenticatedUser = users.find(
        (u) => u.email === user.email && u.password === user.password
      );

      if (authenticatedUser) {
        this.currentUserSignal.set(authenticatedUser);
        this.isAuthenticatedUserSignal.set(true);
        localStorage.setItem('currentUser', JSON.stringify(authenticatedUser));
        return null;
      }
      return 'Invalid email or password';
    } catch (error) {
      console.error('Login error:', error);
      return 'An error occurred during login';
    }
  }

  async logout() {
    this.currentUserSignal.set(null);
    this.isAuthenticatedUserSignal.set(false);
    localStorage.removeItem('currentUser');
  }

  async register(user: User) {
    try {
      const users = await this.getUsers();
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));
      this.currentUserSignal.set(user);
      this.isAuthenticatedUserSignal.set(true);
      localStorage.setItem('currentUser', JSON.stringify(user));
    } catch (error) {
      console.error('Registration error:', error);
    }
  }

  getUsers(): User[] {
    const storedUsers = localStorage.getItem('users');
    return storedUsers ? JSON.parse(storedUsers) : [];
  }
  
  getCurrentUser(): WritableSignal<User | null> {
    return this.currentUserSignal;
  }

  isAuthenticated(): WritableSignal<boolean> {
    return this.isAuthenticatedUserSignal;
  }
}
