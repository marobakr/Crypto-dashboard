import { CryptoDashboard } from '@/features/crypto/pages/crypto-dashboard/crypto-dashboard';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  imports: [CryptoDashboard],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {}
