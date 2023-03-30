import {Component, OnInit} from '@angular/core';
import {IUser, IUserQueryParams, userQueryParamsNames} from '../../models/user.model';
import {UserService} from '../../services/user.service';
import {IFilterTableOptions} from '../filter-table/filter-table.component';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit {
  // users: Observable<IUser[]> = this.userService.getUsers(); // переделать методм присвоивания данных через ngOnInit
  users: IUser[] = [];
  filterTableOptions: IFilterTableOptions[];

  queryOptions: IUserQueryParams = {
    gender: JSON.parse(localStorage.getItem('Gender')),
    location: JSON.parse(localStorage.getItem('Location')),
    email: JSON.parse(localStorage.getItem('Email')),
    phone: JSON.parse(localStorage.getItem('Phone'))
  };

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.filterTableOptions = Object.entries(this.queryOptions).map(option => {
      return {
        name: userQueryParamsNames[option[0] as keyof IUserQueryParams],
        value: option[1]
      };
    });

    this.getUsers();
  }

  onChange($event: IFilterTableOptions): void {
    localStorage.setItem($event.name, JSON.stringify($event.value));
    this.queryOptions[$event.name.toLowerCase() as keyof IUserQueryParams] = $event.value;
    this.getUsers();
  }

  getUsers() {
    const inc = ['id', 'name', 'picture', ...Object.entries(this.queryOptions).filter(param => {
      return param[1];
    }).map(param => param[0])];
    console.log(inc);
    this.userService.getUsers({inc}).subscribe(users => {
      console.log(users);
      this.users = users.filter(noIdUsr => noIdUsr.id.value !== null);
    });
  }
}
