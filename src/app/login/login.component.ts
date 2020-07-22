import {  Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authservice:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  onLogin(dataForm){
   
    this.authservice.login(dataForm.email,dataForm.password);
    if(this.authservice.isAuthenticated){
      this.authservice.saveAuthenticatedUser();
        
        this.router.navigateByUrl("/home");


    }
   
  }

}
