import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  // const p_ID = inject(PLATFORM_ID);
  // const router = inject(Router);
  // if (isPlatformBrowser(p_ID)) {
  //   if (localStorage.getItem('token')) {
  //     return true;
  //   } else {
  //     return router.createUrlTree('/login');
  //   }
  // }
  return true;
};
