import { AuthService } from '@/features/auth/services/auth';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-topbar',
  imports: [RouterLink, RouterLink],
  templateUrl: './topbar.html',
  styleUrl: './topbar.scss',
})
export class Topbar {
  private authService = inject(AuthService);

  private router = inject(Router);

  logout(): void {
    this.authService.clearCookies();
    this.router.navigate(['/login']);
  }
}
