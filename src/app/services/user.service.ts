import {HttpClient} from '@angular/common/http';
import {Injectable, OnInit} from '@angular/core';
import {map, Observable} from 'rxjs';
import {ITableUser} from '../models/user.model';


@Injectable({
  providedIn: 'root'
})

export class UserService implements OnInit{
  private apiUrl = 'https://randomuser.me/api/?results=100&seed=755d9457a4d72f58'

  constructor(private http: HttpClient) { }

  // users: any = []
  //
  // getUser(): Observable<{results: ITableUser }> {
  //   return this.http.get<{results: ITableUser }>(this.apiUrl)
  // }
  //
  // allUsers: ITableUser[] = []

  getUsersTable(): Observable<ITableUser[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(response => {
        return response.results.map((item: any) => {
          return {
            picture: item.picture.medium,
            name: `${item.name.first} ${item.name.last}`,
            gender: item.gender,
            phone: item.phone
          } as ITableUser
        })
      })
    )
  }

  allUsers: any = [] // здесь хранятся юзеры

  ngOnInit(): void {
    this.getUsersTable().subscribe(users => {
      this.allUsers = users
    })
  }


  // returnAllUser() {
  //   this.getUser().subscribe(response => {
  //     this.allUsers.push(response.results)
  //   })
  //   return this.allUsers
  // }
  //
  // firstName = 'Lexa'
  // lastName = 'Manzul'
  // gender = 'male'
  //
  // generateData() {
  //   const user = {
  //     name: this.allUsers.name.first + ' ' + this.allUsers.name.last,
  //     gender: this.allUsers.gender
  //   }
  //   this.users.push(user)
  //   return this.users
  // }



  // getUsers(): Observable<any> { // описать интерфейс вместо any
  //   return this.http.get<any>(this.apiUrl).pipe(
  //     map(res => {
  //       return res.results.map((r: any) => {
  //         return {
  //           picture: r.picture.medium,
  //           name: r.name.first + '' + r.name.last,
  //           gender: r.gender,
  //           phone: r.phone
  //         }
  //       })
  //     })
  //   );
  // }






}
