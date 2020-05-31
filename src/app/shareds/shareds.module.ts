import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberTrackerComponent, AreaChartComponent, ColumnChartComponent, CardComponent, DropDownPickerComponent } from '.';
import { MatCardModule } from '@angular/material/card';
import { HighchartsChartModule } from 'highcharts-angular';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [ColumnChartComponent, AreaChartComponent, CardComponent, DropDownPickerComponent, NumberTrackerComponent],
  imports: [
    CommonModule,
    MatCardModule,
    HighchartsChartModule,
    MatSelectModule,
  ],
  exports: [ColumnChartComponent, AreaChartComponent, CardComponent, DropDownPickerComponent, NumberTrackerComponent],
})
export class SharedsModule {}
