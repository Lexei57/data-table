import {Component, OnInit} from '@angular/core';
import {IUser} from '../../models/user.model';
import {UserService} from '../../services/user.service';


@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit{
  // users: Observable<IUser[]> = this.userService.getUsers(); // переделать методм присвоивания данных через ngOnInit
  users: IUser[] = []

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(user => {
      if (user.length > 99) {
        this.users = user.filter(user => user.id.value !== null)

      } else {
        this.users = user
      }
    })
  }


}
