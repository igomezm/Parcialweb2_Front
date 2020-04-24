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

    getAllUsers(){

      this.http.get('http://localhost:3000/users');

    }

    saveUsers(){
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