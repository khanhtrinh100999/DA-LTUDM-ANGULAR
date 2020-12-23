import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-themgiaodich',
  templateUrl: './themgiaodich.component.html',
  styleUrls: ['./themgiaodich.component.css']
})
export class ThemgiaodichComponent implements OnInit {

  constructor(private router :Router) { }

  ngOnInit(): void {
  }
  dsgiaodich(){
  	this.router.navigate(['dsgiaodich'])
  }

}
