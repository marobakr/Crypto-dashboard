import { Routes } from '@angular/router';
import { cryptoDetailsResolver } from '../resolvers/crypto-details-resolver';

export default [
  {
    path: '',
    loadComponent: () =>
      import('../pages/crypto-dashboard/crypto-dashboard').then((c) => c.CryptoDashboard),
  },

  {
    path: ':slug',
    resolve: {
      coins: cryptoDetailsResolver,
    },
    loadComponent: () => import('../pages/crypto-id/crypto-id').then((c) => c.CryptoId),
  },
] as Routes;
