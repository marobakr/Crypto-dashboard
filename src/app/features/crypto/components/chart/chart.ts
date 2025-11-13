import { ThemeService } from '@/core/services/theme';
import { Component, inject, Input } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';

type theme = 'dark' | 'light';
@Component({
  selector: 'app-chart',
  imports: [NgApexchartsModule],
  templateUrl: './chart.html',
  styleUrl: './chart.scss',
})
export class Chart {
  private theme = inject(ThemeService);
  @Input({ required: true }) series!: ApexAxisChartSeries;
  @Input({ required: true }) color: string = '';

  getCurrentTheme(): theme {
    return this.theme.current === 'dark-theme' ? 'dark' : 'light';
  }
}
