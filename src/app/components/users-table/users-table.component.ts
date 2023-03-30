import {Component, OnInit} from '@angular/core';
import {IUser, IUserQueryParams, userQueryParamsNames} from '../../models/user.model';
import {UserService} from '../../services/user.service';
import {IFilterTableOptions} from '../filter-table/filter-table.component';


@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit{
  // users: Observable<IUser[]> = this.userService.getUsers(); // переделать методм присвоивания данных через ngOnInit
  users: IUser[] = []
  filterTableOptions: IFilterTableOptions[];

  queryOptions: IUserQueryParams = {
    gender: true,
    location: true,
    email: true,
    phone: true
  }


  constructor(private userService: UserService) { }



  ngOnInit(): void {


    const inc = [ 'id', 'name','picture', ...Object.entries(this.queryOptions).filter(param => {
      return param[1]
    }).map(param => param[0]) ]
    console.log(inc);
    this.userService.getUsers({inc}).subscribe(users => {
      console.log(users);
      this.users = users
        // .filter(user => user.id.value !== null)
    })

    this.filterTableOptions = Object.entries(this.queryOptions).map(option => {
      return {
        name: userQueryParamsNames[option[0] as keyof IUserQueryParams],
        value: option[1]
      }
    })
    }

  onChange($event: IFilterTableOptions): void {
    console.log($event);
  }
}
