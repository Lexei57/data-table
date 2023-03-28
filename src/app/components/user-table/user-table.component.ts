import {Component, OnInit} from '@angular/core';
import {IUser} from '../../models/user.model';
import {UserService} from '../../services/user.service';


@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
  users: IUser[] = []

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users
    })
  }


}
