import { Component, OnInit, OnDestroy } from '@angular/core';
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
  AllTweets=[];
  twittear = false;
  tweets: Tweet[];
  Allids = [];


  constructor(private postService: PostService,  private userService: UserService, private router: Router) { 
    
  }

  ngOnInit(): void {
  }

  Alltweets(){
    /*
    this.postService.findAllPost()
    (tweets => {
    for (var i = 0; i < .length; i++) {
      //if (idPost[i].id == request.params.idPost) {
        return (idPost[i]);
  
        this.esta = true;

      
      }
    });*/
  }


}
