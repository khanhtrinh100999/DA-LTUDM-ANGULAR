import { Route } from '@angular/compiler/src/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DangkyComponent } from './components/dangky/dangky.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bai06';
  constructor(private router:Router){
  }
  login(){
  	this.router.navigate(['login']);
  }
  dangky(){
    this.router.navigate(['dky']);

  }
}



