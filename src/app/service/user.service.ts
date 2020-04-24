import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { HttpClient, HttpHeaders,HttpEvent, HttpErrorResponse, HttpEventType  } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from  'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { 

  }

/*
  getAll(): Observable<Array<User>> {
    return this.http.get(environment.url + '/user').pipe(map(
      (data: any) =>
        data.map(
          json => User.fromJson(json)
        )
    ));
  }


  get(id): Observable<User> {
    return this.http.get(environment.url + '/user/' + id).pipe(map(
      (data: any) => {
        if (data === null){
          console.error('204 - User not exist.')
          return null;
        } else {
          return User.fromJson(data);
        }
      }
    ));
  }

  save(user): Observable<User> {
    return this.http.post(environment.url + '/user', JSON.stringify(user),
      new HttpHeaders({'Content-Type' : 'application/json; charset=UTF-8;'})).pipe(map(
      (data: any) => {
        if (data.error) {
          console.error(data.status + ' - ' + data.message);
          return null;
        } else {
          return User.fromJson(data);
        }
      }
    ));
  }

  update(user, id): Observable<User> {
    return this.http.put(environment.url + '/user/' + id, JSON.stringify(user),
      new HttpHeaders({'Content-Type' : 'application/json; charset=UTF-8;'})).pipe(map(
      (data: any) => {
        if (data === null){
          console.error('204 - User not exist.')
          return null;
        } else {
          return User.fromJson(data);
        }
      }
    ));
  }


  login(user): Observable<User> {
    return this.http.post(environment.url + '/user/login', JSON.stringify(user),
      new HttpHeaders({'Content-Type' : 'application/json; charset=UTF-8;'})).pipe(map(
      (data: any) => {
        if (data.error) {
          console.error(data.status + ' - ' + data.message);
          return null;
        } else {
          return User.fromJson(data);
        }
      }
    ));
  }
}
*/
    saveUser(user){
      return this.http.post('http://localhost:3000/users/',user);
    }

    loginUser(user){
      return this.http.post('http://localhost:3000/users/login', user);
    }

    getByUserName(username): Observable<User> {
      return this.http.get<User>('http://localhost:3000/users/username/'+ username);
    }
    findOneUser(id){
      return this.http.get('http://localhost:3000/users/'+ id);
    }
    getAllUsers(){
      return this.http.get('http://localhost:3000/users/');

    }


  }
