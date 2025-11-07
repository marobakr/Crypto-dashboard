import { Component, Input } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-chart',
  imports: [NgApexchartsModule],
  templateUrl: './chart.html',
  styleUrl: './chart.css',
})
export class Chart {
  @Input({ required: true }) series!: ApexAxisChartSeries;
  @Input({ required: true }) color: string = '';
}
