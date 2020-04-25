import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Tweet } from '../model/tweetModel';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {
  public tweet:Tweet;
  public listaTweets=[];


    constructor (private postService: PostService,private _snackBar: MatSnackBar, private userService: UserService, private router: Router) {

    }

  ngOnInit(): void {}

  
    adicionartweet(){
      this.listaTweets.push(this.tweet);
      /*this.tweet = new Tweet ();*/
    }
    
    

}
