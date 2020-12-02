import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dangky',
  templateUrl: './dangky.component.html',
  styleUrls: ['./dangky.component.css']
})
export class DangkyComponent implements OnInit {
	

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  kbao(){
  	this.router.navigate (['kbao']);
  }
  return(){
    this.router.navigate(['']);
  }

}