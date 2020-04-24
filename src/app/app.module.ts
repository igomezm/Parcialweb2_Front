import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TweetComponent } from './tweet/tweet.component';
import { LoginComponent } from './login/login.component';
import { TwittersComponent } from './twitters/twitters.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: 'login', component: LoginComponent, pathMatch: 'full'},
  {path: 'register', component: RegisterComponent, pathMatch: 'full'},
  {path: 'profile/:id', component: ProfileComponent, pathMatch: 'full'},
  //{path: 'tweets', component: TweetersComponent, pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    TweetComponent,
    LoginComponent,
    TwittersComponent,
    RegisterComponent,
    ProfileComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
