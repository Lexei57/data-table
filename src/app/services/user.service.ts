import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private apiUrl = 'https://randomuser.me/api/?results=100&seed=seed' // указать seed

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<any>(this.apiUrl); // указать тип
  }
}
