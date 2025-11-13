import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
import { Topbar } from './core/components/topbar/topbar';
import { ThemeService } from './core/services/theme';

@Component({
  selector: 'app-root',
  imports: [NgxSpinnerModule, RouterOutlet, Topbar],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  private themeService = inject(ThemeService);
  isDarkMode = false;

  ngOnInit(): void {
    this.isDarkMode = this.themeService.current === 'dark-theme';
  }
  ngAfterViewInit(): void {
    this.themeService.initTheme();
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;

    this.themeService.toggleTheme();
  }
}
