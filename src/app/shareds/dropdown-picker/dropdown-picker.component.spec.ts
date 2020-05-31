import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownPickerComponent } from './dropdown-picker.component';

describe('DropDownPickerComponent', () => {
  let component: DropDownPickerComponent;
  let fixture: ComponentFixture<DropDownPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropDownPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropDownPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
