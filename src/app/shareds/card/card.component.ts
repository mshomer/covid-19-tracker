import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() title: string;
  @Input() data: any;
  @Input() date: string;
  @Input() body: string;
  @Input() borderBottomColor: string;
  
  @HostBinding('class') hostBindingBorderBottomColor = '-border-bottom';
  
  constructor() { }

  ngOnInit(): void {
    this.hostBindingBorderBottomColor = this.borderBottomColor + this.hostBindingBorderBottomColor;
  }

}
