import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

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
