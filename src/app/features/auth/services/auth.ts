import { inject, Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../../../core/config/api.config';
import { ApiMethods } from '../../../core/services/api-methods';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends ApiMethods {
  cookieService = inject(CookieService);
  login(credentions: any): Observable<{ token: string }> {
    return this.post<{ token: string }>(
      `${API_CONFIG.AUTH_BASE_URL}/${API_CONFIG.AUTH}`,
      credentions
    );
  }
  userRole(): string {
    try {
      return JSON.parse(this.cookieService.get('token'))?.username;
    } catch (error) {
      return 'not-allow';
    }
  }
}
