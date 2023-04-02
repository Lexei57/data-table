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
  users: IUser[] = [];
  filterTableOptions: IFilterTableOptions[];

  queryOptions: IUserQueryParams = {
    gender: JSON.parse(localStorage.getItem('Gender')) || true,
    location: JSON.parse(localStorage.getItem('Location')) || true,
    email: JSON.parse(localStorage.getItem('Email')) || true,
    phone: JSON.parse(localStorage.getItem('Phone')) || true
  };

  constructor(private userService: UserService) { }

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
    this.userService.getUsers({inc}).subscribe(users => {
      this.users = users.filter(noIdUsr => noIdUsr.id.value !== null);
    });
  }
}
