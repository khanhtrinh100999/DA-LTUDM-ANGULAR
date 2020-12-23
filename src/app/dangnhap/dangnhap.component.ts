import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dangnhap',
  templateUrl: './dangnhap.component.html',
  styleUrls: ['./dangnhap.component.css']
})
export class DangnhapComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  dky(){
  	this.router.navigate(['dangky'])

  }
  dsgiaodich(){
  	this.router.navigate(['dsgiaodich'])
  }

}
