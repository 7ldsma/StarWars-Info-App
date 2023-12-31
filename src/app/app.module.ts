import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StarshipsComponent } from './starships/starships.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { ScrollComponent } from './scroll/scroll.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './guard/auth.guard';
import { CharactersComponent } from './characters/characters.component';
import { FilmsComponent } from './films/films.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'starships', component: StarshipsComponent, canActivate: [AuthGuard]},
  {path: 'characters', component: CharactersComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}

];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StarshipsComponent,
    NavbarComponent,
    ScrollComponent,
    LoginComponent,
    RegisterComponent,
    CharactersComponent,
    FilmsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    InfiniteScrollModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
