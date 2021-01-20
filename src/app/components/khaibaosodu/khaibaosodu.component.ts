import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ViService} from './../../service/vi.service';
import {Vi} from './../../model/vi.model';
import  {Subscription} from 'rxjs';

@Component({
  selector: 'app-khaibaosodu',
  templateUrl: './khaibaosodu.component.html',
  styleUrls: ['./khaibaosodu.component.css']
})
export class KhaibaosoduComponent implements OnInit,OnDestroy {
  public vi : any;
  public subscription! :Subscription;
  constructor( public viService:ViService,
    public  router :Router
    ) { }

  ngOnInit(): void {
    this.vi =new Vi();
  }
   dsgiaodich(){
   	this.router.navigate(['dsgiaodich'])

   }
   dangky(){
   	this.router.navigate(['dangky'])
   }
 
  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
    onAddVi(){
      this.vi.username='khanhya';//thay bằng tên user sau đăng nhập
      this.subscription=this.viService.addVi(this.vi ).subscribe(data =>{
  
        this.router.navigate(['dsgiaodich']);
      });
   
     }
    } 


