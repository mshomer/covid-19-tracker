import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import * as Highcharts from 'highcharts';
import { UnsubscribeOnDestroyAdapter } from 'src/app/modules/unsubscribe-on-destroy-adapter.ts';

@Component({
  selector: 'app-widget-column-chart',
  templateUrl: './column-chart.component.html',
  styleUrls: ['./column-chart.component.scss'],
})
export class ColumnChartComponent extends UnsubscribeOnDestroyAdapter
  implements OnInit {
  Highcharts = Highcharts;
  chartOptions;

  @Input()
  set data(data: any) {
    if (!data) return;

    this.chartOptions = {
      chart: {
        type: 'column',
      },
      title: {
        text: `Current state in ${data.country}`,
      },
      xAxis: {
        type: 'category',
      },
      yAxis: {
        title: {
          enabled: false,
        },
      },
      credits: {
        enabled: false,
      },
      legend: {
        enabled: false,
      },
      plotOptions: {
        series: {
          borderWidth: 0,
          dataLabels: {
            enabled: true,
            format: '{point.y}',
          },
        },
      },
      tooltip: {
        enabled: false,
      },
      series: [
        {
          colorByPoint: true,
          data: [
            {
              name: 'Infected',
              y: data.confirmed,
              color: 'rgba(0, 0, 255, 0.5)',
            },
            {
              name: 'Recovered',
              y: data.recovered,
              color: 'rgba(0, 255, 0, 0.5)',
            },
            {
              name: 'Deaths',
              y: data.deaths,
              color: 'rgba(255, 0, 0, 0.5)',
            },
          ],
        },
      ],
    };
  }

  constructor(private api: ApiService) {
    super();
  }

  ngOnInit(): void {}
}
