import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { 

  }
  findAllPost(){
    return this.http.get('http://localhost:3000/post'); 

  }
  findOnePost(idPost){
    return this.http.get('http://localhost:3000/post', idPost); 

  }
  deletePostByidPostst(idPost){
    return this.http.delete('http://localhost:3000/post/', idPost);

  }
  savePost(user){
    return this.http.post('http://localhost:3000/post/',user);

  }
 /* createPost(user){
    return this.http.post('http://localhost:3000/post/',user);

  }
  */
}


