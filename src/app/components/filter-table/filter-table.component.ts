import {Component, EventEmitter, Input, Output} from '@angular/core';

export interface IFilterTableOptions {
  name: string
  value: boolean
}

@Component({
  selector: 'app-filter-table',
  templateUrl: './filter-table.component.html',
  styleUrls: ['./filter-table.component.scss']
})
export class FilterTableComponent {
  @Input() options: IFilterTableOptions[]
  @Output() valueChanged: EventEmitter<IFilterTableOptions> = new EventEmitter<IFilterTableOptions>()

  onChange(event: IFilterTableOptions) {
    event.value = !event.value;
    this.valueChanged.emit(event)
  }

}
