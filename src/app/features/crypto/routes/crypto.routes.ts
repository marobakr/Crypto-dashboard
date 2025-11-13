import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () =>
      import('../pages/crypto-dashboard/crypto-dashboard').then((c) => c.CryptoDashboard),
  },

  {
    path: ':slug',
    loadComponent: () => import('../pages/crypto-id/crypto-id').then((c) => c.CryptoId),
  },
] as Routes;
