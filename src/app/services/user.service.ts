import {HttpClient} from '@angular/common/http';
import {Injectable, OnInit} from '@angular/core';
import {BehaviorSubject, filter, map, Observable, Subject, tap} from 'rxjs';
import {IUser, IUserResponse, IUserValues} from '../models/user.model';


@Injectable({
  providedIn: 'root'
})

export class UserService {
  private seed: string = '755d9457a4d72f57';
  private apiUrl = `https://randomuser.me/api/`;

  // usersDetails: IUserDetails[] = []

  users: IUser[] = [];


  constructor(private http: HttpClient) {
    // this.getUsers().subscribe();
  }



  getUsers(): Observable<IUser[]> {
    return this.http.get<IUserResponse>(this.apiUrl).pipe(
      map(response => {
        return response.results.map((item: any) => {
          return {
            picture: item.picture.medium,
            name: `${item.name.first} ${item.name.last}`,
            gender: item.gender,
            phone: item.phone
          }
        })
      })
    )
  }


}
