import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TweetComponent } from './tweet/tweet.component';
import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { TwittersComponent } from './twitters/twitters.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { CookieService} from 'ngx-cookie-service';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule, MatIconModule,MatCardModule, MatButtonModule,MatProgressBarModule } from '@angular/material';

export const routes: Routes = [
  {path: 'login', component: LoginComponent, pathMatch: 'full'},
  {path: 'register', component: RegisterComponent, pathMatch: 'full'},
  {path: 'profile', component: ProfileComponent, pathMatch: 'full'},
  {path: 'Twitters', component: TwittersComponent, pathMatch: 'full'},
  {path: 'user-edit', component: UserEditComponent, pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    TweetComponent,
    LoginComponent
  ],
  imports: [
    HttpClientModule,  
    BrowserModule,
    MatToolbarModule,  
    MatIconModule,  
    MatButtonModule,  
    MatCardModule,  
    MatProgressBarModule  
  ],

  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
