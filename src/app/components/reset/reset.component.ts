import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  save(){
  	this.router.navigate(['lviec'])

  }
  return(){
  	this.router.navigate(['lviec'])
  }

}