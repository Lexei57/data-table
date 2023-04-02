import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable,} from '@angular/core';
import {map, Observable, tap} from 'rxjs';
import {IUser, IUserResponse, User} from '../models/user.model';
import {apiDescription, arrayToString} from '../utils/utils';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private seed: string = '755d9457a4d72f57';
  private numberOfUsers: number = 100;
  private apiUrl: string = `https://randomuser.me/api/`;
  users: IUser[] = [];

  constructor(private http: HttpClient) {
  }
  getUsers(queryParams: apiDescription): Observable<IUser[]> {
    arrayToString(queryParams);
    const params = new HttpParams().appendAll({
      ...queryParams,
      results: this.numberOfUsers,
      seed: this.seed
    });
    return this.http.get<IUserResponse>(this.apiUrl, {
      params
    })
      .pipe(
        map(response => response.results.map(user => new User(user))),
        tap(response => this.users = response)
      );
  }
}
