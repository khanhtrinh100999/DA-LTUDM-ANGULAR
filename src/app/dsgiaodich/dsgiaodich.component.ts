import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dsgiaodich',
  templateUrl: './dsgiaodich.component.html',
  styleUrls: ['./dsgiaodich.component.css']
})
export class DsgiaodichComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  vi(){
  	this.router.navigate(['vi'])
  }
  Themgiaodich(){
  	this.router.navigate(['themgiaodich'])
  }
  thongtingiaodich(){
  	this.router.navigate(['thongtingiaodich'])
  }

}
