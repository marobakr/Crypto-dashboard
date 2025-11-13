import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export const unauthGuard: CanActivateFn = (route, state) => {
  const cookieService = inject(CookieService);
  const router = inject(Router);
  let token;
  try {
    token = cookieService.get('token');
  } catch (error) {
    token = false;
  }

  if (token) {
    return router.createUrlTree(['/crypto']);
  }
  return true;
};
