import { CanActivateFn } from '@angular/router';

export const unauthGuard: CanActivateFn = (route, state) => {
  // const p_ID = inject(PLATFORM_ID);
  // const router = inject(Router);

  // if (isPlatformBrowser(p_ID)) {
  //   if (!localStorage.getItem('token')) {
  //     return router.createUrlTree(['/login']);
  //   } else return router.createUrlTree(['/crypto']);
  // }
  return true;
};
