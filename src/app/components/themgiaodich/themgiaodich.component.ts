import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ActionService} from './../../service/action.service';
import {Action} from './../../model/action.model';
import  {Subscription} from 'rxjs';

@Component({
  selector: 'app-themgiaodich',
  templateUrl: './themgiaodich.component.html',
  styleUrls: ['./themgiaodich.component.css']
})
export class ThemgiaodichComponent implements OnInit,OnDestroy {
  public action : any;
  public subscription! :Subscription;
  constructor(
    public actionService:ActionService,
    public  router :Router
  ) { }

  ngOnInit() {
    this.action =new Action();
  }
  onAddAction(){
    this.action.username='khanhya';//thay bằng tên user sau đăng nhập
    this.subscription=this.actionService.addAction(this.action ).subscribe(data =>{

      this.router.navigate(['dsgiaodich']);
    });
 
   }
   dsgiaodich(){
     this.router.navigate(['dsgiaodich']);
   }

 
 ngOnDestroy(){
  if(this.subscription){
    this.subscription.unsubscribe();
  }

}


}
