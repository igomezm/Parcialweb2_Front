import {Component, OnInit} from '@angular/core';
import {User} from '../model/user';
import {UserService} from '../service/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';

 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  public user: User;
  public confirm: string;

  constructor(private _snackBar: MatSnackBar, private userService: UserService) {}
  

  ngOnInit(): void {
    this.user = new User(null, null, null,null,null);
  }

  onSave() {
    if (this.isValid()) {
      this.userService.saveUser(this.user).subscribe(
        user => {
          if (user === null) {
            this.openSnackBar('Username exist.', 'Retry');
          } else {
            this.openSnackBar('Registered user successfully, please login.', 'login');
          }
          this.user.pass = '';
          this.confirm = '';
        }
      );

    }
  }

  isValid(){
   
    let result = true;

    if (this.user.username === null || this.user.username.length === 0 ){
      result = false;
    }

    if (this.user.pass === null || this.user.pass.length === 0){
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
}