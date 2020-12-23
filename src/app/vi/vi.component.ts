import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-vi',
  templateUrl: './vi.component.html',
  styleUrls: ['./vi.component.css']
})
export class ViComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  dsgiaodich(){
  	this.router.navigate(['dsgiaodich'])
  }

}
