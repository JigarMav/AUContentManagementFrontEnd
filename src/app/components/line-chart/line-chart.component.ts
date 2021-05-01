import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css'],
})
export class LineChartComponent implements OnInit {
  lineChartData: ChartDataSets[] = [
    { data: [32, 6, 3, 1, 21, 2, 0], label: 'Courses / Month' },
  ];

  lineChartLabels: Label[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
  ];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';
  constructor() {}

  ngOnInit(): void {}
}
