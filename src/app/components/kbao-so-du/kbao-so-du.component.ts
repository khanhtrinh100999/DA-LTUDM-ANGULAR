import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kbao-so-du',
  templateUrl: './kbao-so-du.component.html',
  styleUrls: ['./kbao-so-du.component.css']
})
export class KbaoSoDuComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  lviec(){
  	this.router.navigate(['lviec'])
  }

}
