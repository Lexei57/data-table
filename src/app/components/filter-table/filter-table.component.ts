import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-filter-table',
  templateUrl: './filter-table.component.html',
  styleUrls: ['./filter-table.component.scss']
})
export class FilterTableComponent {
  @Output() genderChange = new EventEmitter<boolean>();
  @Output() cityChange = new EventEmitter<boolean>();
  @Output() streetChange = new EventEmitter<boolean>();
  @Output() emailChange = new EventEmitter<boolean>();
  @Output() phoneChange = new EventEmitter<boolean>();

  onGenderChange(event: any) {
    this.genderChange.emit(event.target.checked);
  }

  onCityChange(event: any) {
    this.cityChange.emit(event.target.checked);
  }

  onStreetChange(event: any) {
    this.streetChange.emit(event.target.checked);
  }

  onEmailChange(event: any) {
    this.emailChange.emit(event.target.checked);
  }

  onPhoneChange(event: any) {
    this.phoneChange.emit(event.target.checked);
  }
}
