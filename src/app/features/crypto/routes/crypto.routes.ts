import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () =>
      import('../pages/crypto-dashboard/crypto-dashboard').then((c) => c.CryptoDashboard),
  },
] as Routes;
