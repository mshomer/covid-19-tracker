import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import * as Highcharts from 'highcharts';
import { UnsubscribeOnDestroyAdapter } from 'src/app/modules/unsubscribe-on-destroy-adapter.ts';

@Component({
  selector: 'app-widget-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.scss'],
})
export class AreaChartComponent extends UnsubscribeOnDestroyAdapter
  implements OnInit {
  Highcharts = Highcharts;
  chartOptions;

  @Input()
  set data(data: any) {
    if (!data) return;

    this.chartOptions = {
      chart: {
        type: 'area',
      },
      title: {
        text: null,
      },
      xAxis: {
        categories: data.categories,
        title: {
          enabled: false,
        },
      },
      yAxis: {
        title: {
          enabled: false,
        },
      },
      credits: {
        enabled: false,
      },
      series: [
        {
          name: 'Infected',
          data: data.confirmed,
          color: 'rgba(0, 0, 255, 0.5)',
        },
        {
          name: 'Deaths',
          data: data.deaths,
          color: 'rgba(255, 0, 0, 0.5)',
        },
        {
          name: 'Recovered',
          data: data.recovered,
          color: 'rgba(0, 255, 0, 0.5)',
        },
      ],
    };
  }

  constructor(private api: ApiService) {
    super();
  }

  ngOnInit(): void {}
}
