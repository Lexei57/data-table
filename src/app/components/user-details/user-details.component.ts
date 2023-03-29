import { Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import DataSource from 'devextreme/data/data_source';
import ArrayStore from 'devextreme/data/array_store';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  @Input() key: number

  detailsDataSource: DataSource

  constructor(private userService: UserService) { }

  ngOnInit(): void {
      this.detailsDataSource = new DataSource({
        store: new ArrayStore({
          data: this.userService.users,
          key: 'id.value'
        }),
        filter: ['id.value', '=', this.key]
      })

  }


}
