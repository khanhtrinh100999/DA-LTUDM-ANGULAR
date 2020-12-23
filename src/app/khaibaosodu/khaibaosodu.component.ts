import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-khaibaosodu',
  templateUrl: './khaibaosodu.component.html',
  styleUrls: ['./khaibaosodu.component.css']
})
export class KhaibaosoduComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  dsgiaodich(){
  	this.router.navigate(['dsgiaodich'])

  }
  dangky(){
  	this.router.navigate(['dangky'])
  }

}
