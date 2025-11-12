import { ILoginPost, ILoginRes } from '@/features/auth/interface/login';
import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../../../core/config/api.config';
import { ApiMethods } from '../../../core/services/api-methods';

@Injectable({
  providedIn: 'root',
})
export class Auth extends ApiMethods {
  private readonly PLATFORM_ID = inject(PLATFORM_ID);

  login(credentions: ILoginPost): Observable<ILoginRes> {
    return this.post<ILoginRes>(`${API_CONFIG.LOGIN}`, credentions);
  }

  setUserInof(userData: ILoginRes) {
    if (isPlatformBrowser(PLATFORM_ID)) {
      localStorage.setItem('userData', JSON.stringify({ ...userData }));
    }
  }

  // getUser(): ILoginRes | undefined {
  //   return isPlatformBrowser(PLATFORM_ID)
  //     ? JSON.parse(localStorage.getItem('userData'))
  //     : undefined;
  // }
}
