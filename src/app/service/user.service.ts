import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { 

  }
    getAllUsers(){
      this.http.get('http://localhost:3000/users');
    }
    saveUser(User){
      return this.http.get('http://localhost:3000/users/users');
    }

    findOneUser(id){
      return this.http.get('http://localhost:3000/users/'+ id);
    }
    getByUserName(username): Observable<User> {
      return this.http.get<User>('http://localhost:3000/users/username/'+ username);
    }
    loginUser(user){
      return this.http.post('http://localhost:3000/users/login', user);
    }
  }