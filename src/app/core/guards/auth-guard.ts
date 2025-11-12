import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export const authGuard: CanActivateFn = (route, state) => {
  const cookieService = inject(CookieService);
  const router = inject(Router);
  try {
    JSON.parse(cookieService.get('token'))?.token;
    return true;
  } catch (error) {
    return router.createUrlTree(['/login']);
  }
};
