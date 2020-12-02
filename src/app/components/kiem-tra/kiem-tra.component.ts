import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-kiem-tra',
  templateUrl: './kiem-tra.component.html',
  styleUrls: ['./kiem-tra.component.css']
})
export class KiemTraComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  return(){
  	this.router.navigate(['lviec'])
  }

}
