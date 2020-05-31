import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { SharedsModule } from 'src/app/shareds/shareds.module';
import { RouterModule } from '@angular/router';
import { CardsComponent } from '../cards/cards.component';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    LayoutComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedsModule,
    MatGridListModule,
  ]
})
export class LayoutModule { }
