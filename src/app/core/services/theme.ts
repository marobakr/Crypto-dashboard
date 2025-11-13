import { inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private renderer: Renderer2;
  private currentTheme: 'light-theme' | 'dark-theme' = 'light-theme';
  private cookieService = inject(CookieService);

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  initTheme(): void {
    const savedTheme = this.cookieService.get('web-theme') as 'light-theme' | 'dark-theme';
    if (savedTheme) {
      this.currentTheme = savedTheme;
    }
    this.renderer.addClass(document.body, this.currentTheme);
  }

  toggleTheme(): void {
    const newTheme = this.currentTheme === 'light-theme' ? 'dark-theme' : 'light-theme';

    this.renderer.removeClass(document.body, this.currentTheme);
    this.renderer.addClass(document.body, newTheme);

    this.currentTheme = newTheme;
    this.cookieService.set('web-theme', newTheme);
  }

  get current(): 'light-theme' | 'dark-theme' {
    return this.currentTheme;
  }
}
