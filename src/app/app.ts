import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
import { Topbar } from './core/components/topbar/topbar';

@Component({
  selector: 'app-root',
  imports: [NgxSpinnerModule, RouterOutlet, Topbar],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('crypto-dashboard');
}
