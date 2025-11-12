import { Routes } from '@angular/router';
import { Notfound } from './core/components/notfound/notfound';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  // auth layouts

  {
    path: '',
    loadComponent: () => import('@layouts/auth-layout/auth-layout').then((c) => c.AuthLayout),
    children: [
      {
        path: 'login',
        loadComponent: () => import('@features/auth/login/login').then((c) => c.Login),
      },
    ],
  },

  // main layouts
  {
    path: '',
    loadComponent: () => import('@layouts/main-layout/main-layout').then((c) => c.MainLayout),
    children: [
      {
        path: 'crypto',
        loadChildren: () => import('@features/crypto/routes/crypto.routes'),
      },
    ],
  },

  //  not found page
  { path: '**', component: Notfound },
];
