import { HttpInterceptorFn } from '@angular/common/http';
import { API_CONFIG } from '@core/config/api.config';

export const apiInjectorInterceptor: HttpInterceptorFn = (req, next) => {
  // Skip interceptor if URL already includes the base URL
  if (req.url.includes(API_CONFIG.CRYPTO_BASE_URL)) {
    return next(req);
  }
  const modifiedReq = req.clone({
    url: `${API_CONFIG.CRYPTO_BASE_URL}/${req.url}`,
    // Set The Token in each Request Header
    setHeaders: {
      Authorization: `Bearer ${API_CONFIG.CRYPTO_TOKEN}`,
    },
  });

  return next(modifiedReq);
};
