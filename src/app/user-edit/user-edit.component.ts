import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CookieService } from 'ngx-cookie-service';

  @Component({
    selector: 'app-user-edit',
    templateUrl: './user-edit.component.html',
    styleUrls: ['./user-edit.component.css']
  })
  export class UserEditComponent implements OnInit {
  
    public user: User;
    public loading = false;
    public usernameEmpty = false;
    public passEmpty = false;
    public errorUserEdit = false;
    public userId: number;
    private keyUser = '&I%U%$234';
    public confirm: string;
  
  
    constructor(private _snackBar: MatSnackBar, private userService: UserService, private router: Router,
                private _cookieService: CookieService) {
      this.user = new User(null, null, null, null);
    }
  
    ngOnInit(): void {
  
      this.userId = Number(this._cookieService.get(this.keyUser));
  
      this.userService.get(this.userId).subscribe(
        user => {
          this.user = user;
        }
      );
  
    }
  
    onSave() {
      if (this.isValid()) {
        this.loading = true;
        this.userService.update(this.user, this.user.id).subscribe(
          user => {
            this.loading = false;
            if (user === null) {
              this.errorUserEdit = true;
              this.openSnackBar('user not exist.', 'Retry');
            } else {
              this.openSnackBar('User Updated', 'Welcome');
            }
            this.confirm = '';
          }
        );
  
      }
    }
  
    isValid() {
      this.passEmpty = false;
      this.usernameEmpty = false;
      this.errorUserEdit = false;
  
      let result = true;
  
      if (this.user.username === null || this.user.username.length === 0) {
        this.usernameEmpty = true;
        result = false;
      }
  
      if (this.user.pass === null || this.user.pass.length === 0) {
        this.passEmpty = true;
        result = false;
      }
      if (this.confirm === null || this.confirm.length === 0 || this.confirm !== this.user.pass){
        this.confirm = '';
        result = false;
      }
  
      return result;
    }
  
    openSnackBar(message: string, action: string) {
      this._snackBar.open(message, action, {
        duration: 5000,
      });
    }
  
  
    onLogOut() {
      this._cookieService.remove(this.keyUser);
      this.router.navigate(['login']);
    }
  
}
