import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import {
  Label,
  SingleDataSet,
  monkeyPatchChartJsTooltip,
  monkeyPatchChartJsLegend,
} from 'ng2-charts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css'],
})
export class PieChartComponent implements OnInit {
  public pieChartLabels: Label = [
    'C++',
    'Angular',
    'Java',
    'Javascript',
    'SQL',
    'Others',
  ];
  public pieChartData: SingleDataSet = [10, 22, 32, 10, 16, 10];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };

  constructor(public http: HttpClient) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }
  ngOnInit(): void {}
}
