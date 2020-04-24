import { Component, OnInit } from '@angular/core';
import {UserService} from '../service/user.service';
import {User} from '../model/user';
import {MatSnackBar} from '@angular/material/snack-bar';
import { CookieService} from 'ngx-cookie-service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: User;
  public loading = false;
  private _cookieService: any;
  keyUser = '&I%U%$234';


  constructor(private _SnackBar: MatSnackBar, private userService: UserService){
    this.user ={
      id:null, username:null, pass:null, creation_date:null
      
      }
  }

  ngOnInit(): void {

      }
      isValid(){

        let result = true;
    
        if (this.user.username === null || this.user.username.length === 0 ){
           result = false;
        }
    
        if (this.user.pass === null || this.user.pass.length === 0){
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
                /*this._cookieService.put(this.keyUser, 
                  user.id.toString()); */
                this.openSnackBar('Bienvenido', 'user');
              }
              this.user.username = '';
              this.user.pass = '';
            }
          );
    
        }
  openSnackBar(message: string, action: string) {
    this._SnackBar.open(message, action, {
      duration: 5000,
    });
  }
  
    
}
