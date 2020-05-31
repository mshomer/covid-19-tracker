import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-widget-dropdown-picker',
  templateUrl: './dropdown-picker.component.html',
  styleUrls: ['./dropdown-picker.component.scss']
})
export class DropDownPickerComponent {

  @Input() label: string;
  @Input() defaultValue: string;
  @Input() defaultValuePlaceholder: string;
  @Input() data: Observable<string[]>;

  @Output() change: EventEmitter<string> = new EventEmitter();

  constructor(private api: ApiService) { }

  onChange(item) {
    this.change.emit(item);
  }
}
