import { Component, OnInit } from '@angular/core';
import {UserService} from '../service/user.service';
import {User} from '../model/user';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: User

  constructor(private _SnackBar: MatSnackBar, private userService: UserService){
    this.user ={
      idUser:null, username:null, pass:null, creation_date:null
   
        });
      }
  }

  ngOnInit() {

      }

      onLogin(){

        if (this.isValid()) {
          this.errorLogin = false;
          this.loading = true;
          this.userService.login(this.user).subscribe(
            user => {
              if (user === null) {
                this.errorLogin = true;
                this.loading = false;
                this.openSnackBar('User or Pass invalid.', 'Retry');
              } else {
                this._cookieService.put(this.keyUser, user.id.toString());
                this.openSnackBar('User successfully logged in, please start your route plan.', 'Welcome');
                this.router.navigate(['planner']);
              }
              this.user.username = '';
              this.user.pass = '';
            }
          );
    
        }
      }
    
    
      openSnackBar(message: string, action: string) {
        this._snackBar.open(message, action, {
          duration: 5000,
        });
      }