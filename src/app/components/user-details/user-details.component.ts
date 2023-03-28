import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {IUserDetails} from '../../models/user.model';
import {UserService} from '../../services/user.service';
import DataSource from 'devextreme/data/data_source';
import ArrayStore from 'devextreme/data/array_store';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit, AfterViewInit {
  @Input() key: number

  detailsDataSource: DataSource

  details: IUserDetails[] = []

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserDetails().subscribe(response => {
      this.details = response
    })

  }

  ngAfterViewInit(): void {
    this.detailsDataSource = new DataSource({
      store: new ArrayStore({
        data: this.details,
        key: 'id'
      }),
      filter: ['id', '=', this.key]
    })
  }
}
