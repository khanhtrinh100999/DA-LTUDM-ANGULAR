import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-work',
  templateUrl: './form-work.component.html',
  styleUrls: ['./form-work.component.css']
})
export class FormWorkComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  ktra(){
  	this.router.navigate(['ktra'])
  }
  add(){
  	this.router.navigate(['add'])
  }
  reset(){
  	this.router.navigate(['reset'])
  }
  delete(){
  	this.router.navigate(['delete'])
  }
  
}
