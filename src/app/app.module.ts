import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TweetComponent } from './tweet/tweet.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { LoginComponent } from './login/login.component';
import { RouterModule,Routes, Router } from '@angular/router';
import { UserService } from './service/user.service';
import{ HttpClientModule } from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { RegisterComponent } from './register/register.component';
import { TweetsComponent } from './tweets/tweets.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ProfileComponent } from './profile/profile.component';
import { PostService } from './service/post.service';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';

export const routes: Routes = [
  {path: 'login', component: LoginComponent, pathMatch: 'full'},
  {path: 'register', component: RegisterComponent, pathMatch: 'full'},
  {path: 'profile/:id', component: ProfileComponent, pathMatch: 'full'},
  {path: 'tweets', component: TweetsComponent, pathMatch: 'full'}
];


@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
  //  TweetComponent,
    LoginComponent,
    RegisterComponent,
    TweetsComponent,
    ProfileComponent
=======
    TweetComponent,
    LoginComponent,
    TwittersComponent,
    RegisterComponent,
    ProfileComponent,
    UserEditComponent
>>>>>>> 5e2a4d9dc20a3b8e49130852be1947f2ac8989f6
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    FormsModule,
    MatCardModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    MatIconModule,
    MatExpansionModule
  ],
  providers: [UserService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
