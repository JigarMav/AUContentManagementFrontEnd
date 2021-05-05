import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, ChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
})
export class BarChartComponent implements OnInit {
  @Input()
  seeGraph: string;

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  myLabels = [];
  myExpense = [];
  barChartLabels: Label[];
  barChartData: ChartDataSets[];

  studentsLabels: Label[] = [
    'Java OOPS',
    'Angular',
    'Javascript',
    'Spring Boot',
    'Version control',
    // '',
  ];

  locationLabels: Label[] = [
    'Banglaore',
    'Chennai',
    'Delhi',
    'Gurgaon',
    'Hyderabad',
    'Mumbai',
    '',
  ];

  locationData: ChartDataSets[] = [
    { data: [17, 10, 8, 12, 6, 2, 0], label: 'Courses / Location' },
  ];

  studentsData: ChartDataSets[] = [
    { data: [17, 10, 14, 21, 6, 0], label: 'Users / Courses' },
  ];
  constructor(public http: HttpClient) {}

  ngOnInit(): void {
    console.log(this.seeGraph);
    this.getGraph();
  }
  getGraph() {
    if (this.seeGraph == 'students') {
      this.barChartLabels = this.studentsLabels;
      this.barChartData = this.studentsData;
    } else {
      this.barChartLabels = this.locationLabels;
      this.barChartData = this.locationData;
    }
  }
}
