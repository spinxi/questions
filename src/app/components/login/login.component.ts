

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth-service.service';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
  
})
export class LoginComponent {
  loginData: any = {
    role: 'none'
  }; 
  registerData: any = {};
  activeTab: string = 'login';
  private loginSubscription?: Subscription;

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.loginSubscription = this.authService.login(this.loginData).subscribe({
      next: (response) => {
        console.log('Login successful');
        if (this.authService.getRole() === 'admin') {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/answers']);
        }
      },
      error: (error) => {
        console.error('Login error:', error);
      }
    });
  }

  register() {
    this.authService.register(this.registerData).subscribe({
      next: (response) => {
        console.log('Registration successful');
        this.router.navigate(['/answers']);
      },
      error: (error) => {
        console.error('Registration error:', error);
        // Handle registration error (e.g., display error message)
      }
    });
  }

  isActive(tabName: string): boolean {
    return this.activeTab === tabName;
  }

  setActiveTab(tabName: string) {
    this.activeTab = tabName;
  }

}