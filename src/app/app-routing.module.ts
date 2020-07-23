import { PageNotFoundComponent } from './partials/page-not-found/page-not-found.component';
import { AfterAuthGuard } from './guards/after-auth.guard';
import { LoginComponent } from './login/login.component';
import { ArticlesComponent } from './articles/articles.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from '../app/guards/auth.guard';



const routes: Routes = [
  { path: '',  redirectTo: "/home", pathMatch: "full",canActivate:[AuthGuard] },
  { path: 'home', component: HomeComponent ,canActivate:[AuthGuard]},
  { path: 'articles', component: ArticlesComponent,canActivate:[AuthGuard] },
  { path: 'login', component: LoginComponent},
  { path: '**',component:PageNotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }