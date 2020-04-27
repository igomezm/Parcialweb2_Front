import {Component, OnInit} from '@angular/core';
import {User} from '../model/user';
import {UserService} from '../service/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  public user: User;
  public confirm: string;
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

  onSave() {
    
      this.userService.saveUser(this.user).subscribe(
        user => {
          console.log(user);
          if (user === null) {
            this.openSnackBar('Username exist.', 'Retry');
          } else {
            this.openSnackBar('Registered user successfully',"");
            this.router.navigate(['/login']);
        }
        });
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }
  /*
  direction(){
    this.router.navigate(['/profile']);
  }
  */

}