import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs';
//import { Tweet } from '../model/tweet';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { 

  }
  savePost(user){
   this.http.post('http://localhost:3000/',user);
  }

  

}
