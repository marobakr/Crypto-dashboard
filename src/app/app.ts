import { Component, signal } from '@angular/core';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CryptoDashboard } from './features/crypto/pages/crypto-dashboard/crypto-dashboard';

@Component({
  selector: 'app-root',
  imports: [CryptoDashboard, NgxSpinnerModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('crypto-dashboard');
}
