import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private fb = inject(FormBuilder);
  loginForm!: FormGroup;

  password!: FormControl;
  username!: FormControl;

  ngOnInit(): void {
    this.initFormControls();
    this.initFormGroupe();
  }

  initFormControls(): void {
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
    ]);
    this.username = new FormControl('', [Validators.required, Validators.minLength(3)]);
  }

  initFormGroupe(): void {
    this.loginForm = this.fb.group({
      password: this.password,
      username: this.username,
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
