import { Component, Input, OnInit} from '@angular/core';
import {IUser} from '../../models/user.model';
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

  users: IUser[] = []

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(response => {
      this.users = response
    })

      this.detailsDataSource = new DataSource({
        store: new ArrayStore({
          data: this.userService.users.filter(user => user.id.value !== null),
          key: 'id.value'
        }),
        filter: ['id.value', '=', this.key]
      })

  }


}
