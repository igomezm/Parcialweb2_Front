import { Component, OnInit } from '@angular/core';
import {UserService} from '../service/user.service';
import {User} from '../model/user';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: User;
  public loading=false;
  keyUser = '&I%U%$234';
  date:Date;

  constructor(private _snackBar: MatSnackBar, private userService: UserService, private router: Router) {
    this.user={
      idUser: null,
      username: null,
      password: null,
      creation_date: this.date
    }
  }


  ngOnInit(): void {

      }
      isValid(){

        let result = true;
    
        if (this.user.username === null || this.user.username.length === 0 ){
           result = false;
        }
    
        if (this.user.password === null || this.user.password.length === 0){
          result = false;
        }
    
        return result;
      }

      login(){
          this.loading = true;
          this.userService.loginUser(this.user).subscribe(
            user => {
              if (user === null) {
                this.openSnackBar('Verifica tu usuario o contraseña', 'Retry');
              } else {

                this.openSnackBar('Bienvenido', this.user.username);
                this.router.navigate(['/profile']);
              }
              this.user.username = '';
              this.user.password = '';
            }
          );
    
        }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }
  direction(){
    this.router.navigate(['/register']);
  }
 
}
