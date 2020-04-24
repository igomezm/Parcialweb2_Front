import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TweetComponent } from './tweet/tweet.component';
//import { ModelComponent } from './model/user.component';
import { LoginComponent } from './login/login.component';
import { TwittersComponent } from './twitters/twitters.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  {path: 'login', component: LoginComponent, pathMatch: 'full'},
  {path: 'register', component: RegisterComponent, pathMatch: 'full'},
  {path: 'profile/:id', component: ProfileComponent, pathMatch: 'full'},
  {path: 'tweets', component: TweetersComponent, pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    TweetComponent,
    //ModelComponent,
    LoginComponent,
    TwittersComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
