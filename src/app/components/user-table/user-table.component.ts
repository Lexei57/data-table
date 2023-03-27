import {Component, OnInit} from '@angular/core';
import {ITableUser} from '../../models/user.model';
import {UserService} from '../../services/user.service';


@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
  // dataSource: any
  // allUsers: ITableUser[] = []

  dataSource: ITableUser[] = []


  constructor(private userService: UserService) {
    // this.dataSource = userService.generateData()
    // this.allUsers = userService.returnAllUser()
  }

  allowedPageSizes = ['all'];

  displayModes = [{ text: "Display Mode 'full'", value: 'full' }, { text: "Display Mode 'compact'", value: 'compact' }];

  displayMode = 'full';

  showPageSizeSelector = true;

  showInfo = true;

  showNavButtons = true;

  customizeColumns(columns: any) {
    columns.width = 70;
  }

  get isCompactMode() {
    return this.displayMode === 'compact';
  }

  ngOnInit(): void {
    // console.log(this.dataSource);
    // console.log(this.allUsers);
    this.userService.getUsersTable().subscribe(users => {
      this.dataSource = users
    })
  }


}
