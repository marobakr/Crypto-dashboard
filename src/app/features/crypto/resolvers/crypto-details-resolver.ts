import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { CryptoApi } from '../services/crypto-api';

export const cryptoDetailsResolver: ResolveFn<Observable<any>> = (route, state) => {
  const slug = route.paramMap.get('slug') || '';
  const cryptoApi = inject(CryptoApi);

  return slug ? cryptoApi.getCryptoDetails(slug) : EMPTY;
};
