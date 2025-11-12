import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login implements OnInit, OnDestroy {
  private fb = inject(FormBuilder);

  private authService = inject(AuthService);

  private subscription = new Subscription();

  private router = inject(Router);

  private cookieService = inject(CookieService);

  loginForm!: FormGroup;

  password!: FormControl;
  username!: FormControl;

  ngOnInit(): void {
    this.initFormControls();
    this.initFormGroupe();
  }

  initFormControls(): void {
    this.username = new FormControl('', [Validators.required, Validators.minLength(3)]);
    this.password = new FormControl('', [Validators.required, Validators.minLength(3)]);
  }

  initFormGroupe(): void {
    this.loginForm = this.fb.group({
      password: this.password,
      username: this.username,
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.subscription.unsubscribe();
      const credentions = {
        email: 'Yara@apirequest.in',
        ...this.loginForm.value,
      };
      this.subscription = this.authService.login(credentions).subscribe({
        next: (params) => {
          if (params.token) {
            this.router.navigate(['/crypto']);
            const tokens = {
              token: params.token,
              ...this.loginForm.value,
            };
            this.cookieService.set('token', JSON.stringify(tokens));
            this.loginForm.reset();
          }
        },
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  // Function to generate random id
  getRandomId(): number {
    return Math.floor(Math.random() * 10000) + 1;
  }

  // Function to generate random email
  getRandomEmail(): string {
    const randomStr = Math.random().toString(36).substring(2, 8);
    return `${randomStr}@dev.com`;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
