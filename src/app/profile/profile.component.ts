import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '../model/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public user: User;


  constructor(private _snackBar: MatSnackBar, private userService: UserService, private router: Router) {
    this.user={
      idUser: null,
      username: null,
      password: null,
      creation_date: null,

    }

  }
    ngOnInit(): void {

    }

          AllPost(){
            

          }

          deletePost(userdelete){
          
          }
          savePost(user){
        
          }  

}
