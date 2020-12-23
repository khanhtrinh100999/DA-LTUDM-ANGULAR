import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-thongtingiaodich',
  templateUrl: './thongtingiaodich.component.html',
  styleUrls: ['./thongtingiaodich.component.css']
})
export class ThongtingiaodichComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  dsgiaodich(){
  	this.router.navigate(['dsgiaodich'])
  }

}
