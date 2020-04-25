import { Component, OnInit } from '@angular/core';
import { Tweet } from '../model/tweetModel';
import { PostService } from '../service/post.service';
import { UserService } from '../service/user.service';
import { User } from '../model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {
  AllTweets = [] ;

  constructor(private postService: PostService,  private userService: UserService, private router: Router) { 
    this.AllPost();
    this.AllTweets = [] ;
  }

  ngOnInit(): void {
  }

  AllPost(){
   
  }

  profile(username: string){
      this.router.navigate(["/profile", username]);
  }


}
