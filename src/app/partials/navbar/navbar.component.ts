import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router,public authservice:AuthService) { }

  ngOnInit(): void {
  }
  logout(){

    localStorage.removeItem('authUser');
    this.router.navigateByUrl("/login")


  }

 
}
