import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../service/user.service';
import { PostService } from '../service/post.service';
import { User } from '../model/user';
import { Tweet } from '../model/tweetModel';
import { MatSnackBar } from '@angular/material/snack-bar';     
                   

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;
  tweet: Tweet;
  
  public create=false;


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
      message:null,
      published_date:null,     
    }

  }
  ngOnInit(): void {
  
    }

  createPost(){
    this.create=true;
    console.log("sirve");
    this.postService.savePost(this.tweet).subscribe(
     Tweet=>{
     
     if (Tweet === null) {
      this.openSnackBar('complete el tweet',"");
    } else {
      this.openSnackBar('tweet creado',"");
      
  }
  
    this.tweet.message = '';

  
}

  );
}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
      
    });
  }

  }