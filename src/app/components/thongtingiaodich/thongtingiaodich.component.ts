import { Component, OnInit ,OnDestroy} from '@angular/core';
import { Router ,ActivatedRoute,Params } from '@angular/router';
import { ActionService} from './../../service/action.service';
import {Action} from './../../model/action.model';
import  {Subscription} from 'rxjs';

@Component({
  selector: 'app-thongtingiaodich',
  templateUrl: './thongtingiaodich.component.html',
  styleUrls: ['./thongtingiaodich.component.css']
})
export class ThongtingiaodichComponent implements OnInit,OnDestroy {
  public subscription! :Subscription;
  public subscriptionParams! :Subscription;
  public action!:Action;
  constructor(private routerService:Router,
    public actionService :ActionService,
    public activatedRouteService :ActivatedRoute) { }

  ngOnInit() {
    this.action= new Action();
    this.loadData();
  }
  loadData(){
    this.subscriptionParams=this.activatedRouteService.params.subscribe((data:Params )=> {
      let id=data['id'];
      this.subscription=this.actionService.getAction(id).subscribe((action:any)=>{
       this.action=action;
      
      });
    });

  }
  onEditAction(){
    this.subscription =this.actionService.updateAction(this.action).subscribe(data =>{
     this.routerService.navigateByUrl('dsgiaodich');
    
    });

  }
  ngOnDestroy(){
  	if(this.subscription){
  		this.subscription.unsubscribe();
  	}
    if(this.subscriptionParams){
      this.subscriptionParams.unsubscribe();
    }
  	
  	}
  
  
  
    dsgiaodich(){
      this.routerService.navigateByUrl('dsgiaodich');
    }
  
 
 
  

}
