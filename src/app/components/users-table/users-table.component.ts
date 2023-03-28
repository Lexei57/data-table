import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {IUser} from '../../models/user.model';
import {UserService} from '../../services/user.service';


@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent {
  users: Observable<IUser[]> = this.userService.getUsers(); // переделать методм присвоивания данных через ngOnInit
  // users: IUser[] = []
  constructor(private userService: UserService) { }

  // ngOnInit(): void {
  //   this.userService.getUsers().subscribe(user => {
  //     this.users = user
  //   })
  // }


}
