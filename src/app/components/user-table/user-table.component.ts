import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import DataSource from 'devextreme/data/data_source';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
  dataSource!: DataSource;
  pageSize = 25;
  pageSizes = [25, 50, 100];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.dataSource = new DataSource({
      load: (loadOptions) => {
        return this.userService.getUsers().toPromise().then(data => {
          return {
            data: data.results,
            totalCount: data.results.length
          };
        });
      },
      paginate: true,
      pageSize: this.pageSize
    });

  }
}
