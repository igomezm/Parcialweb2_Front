import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../service/user.service';
import { PostService } from '../service/post.service';
import { User } from '../model/user';
import { Tweet } from '../model/tweetModel';
import { MatSnackBar } from '@angular/material/snack-bar';     
import { Validators } from '@angular/forms';
                   

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;
  tweet: Tweet;
  public twittear=[];
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
      
      idPost: null, 
      user: null, 
      message:null,
      published_date:null,     
    }

  }

  ngOnInit(): void {
      this.route.params.subscribe(params => {
        this.tweet.idPost = params.get('idPost');
        this.Posts();
      });
    }

    Posts(){
      this.postService.findAllPost().subscribe(
       twittear =>{
         console.log(twittear);
         this.router.navigate(['/tweets']);
  
       
      });
    }

    deletePostByidPostst(tweet){

        this.postService.deletePostByidPostst(tweet).subscribe()
        console.log("eliminar")
      ;
    }
  createPost(){
    if (this.isValid()) {
    this.create=true;
    console.log("sirve");
    this.postService.savePost(this.tweet).subscribe(
     Tweet=>{
     if (Tweet === null) {
      this.openSnackBar('complete el tweet','Twittea');
    } else {
      this.openSnackBar('tweet creado','creado');
        this.twittear.push(this.tweet);
        this.router.navigate(['/login']);
       
        /*this.tweet = new Tweet ();*/     
  }
  
    this.tweet.message = '';
    }
    );
    }
  }
isValid(){
  //this.errorRegister = false;
  let result = true;

  if (this.tweet.message === null || this.tweet.message.length === 0 ){
    result = false;
  }
  return result;
}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
      
    });
  }
  direction(){
    this.router.navigate(['/Login']);
  }
 

  }