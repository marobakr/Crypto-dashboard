import { Login } from '@/features/auth/login/login';
import { Component } from '@angular/core';

@Component({
  selector: 'app-auth-layout',
  imports: [Login],
  templateUrl: './auth-layout.html',
  styleUrl: './auth-layout.scss',
})
export class AuthLayout {}
