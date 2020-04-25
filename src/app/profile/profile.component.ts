import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '../model/user';
import { Tweet } from '../model/tweetModel';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;
  tweet: Tweet;
  post= [];
  idUser = [];
  usuarios=[];
  username = "";
  fecha : Date;
  mensaje = "";
  id: number;


  constructor(private router: Router, private route: ActivatedRoute,private userService: UserService,
    private postService: PostService,private _snackBar: MatSnackBar) {
    this.user={
      idUser: null,
      username: null,
      password: null,
      creation_date: null,
      
    }
    this.tweet={
      id: null, 
      user: null, 
      text:null,
      
    }

  }
  ngOnInit(): void {
   
    }
    createPost(){
   
    }
    allPost(){
   
    }
  
  deletePost(userdelete){
  
  
  }
  
  openSnackBar(message: string, action: string) {
      this._snackBar.open(message, action, {
        duration: 5000,
      });
    }
  }