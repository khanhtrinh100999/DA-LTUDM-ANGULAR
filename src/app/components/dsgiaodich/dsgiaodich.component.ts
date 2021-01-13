import { Component, OnInit ,OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import { ActionService} from './../../service/action.service';
import {Action} from './../../model/action.model';
import  {Subscription} from 'rxjs';
@Component({
  selector: 'app-dsgiaodich',
  templateUrl: './dsgiaodich.component.html',
  styleUrls: ['./dsgiaodich.component.css']
})
export class DsgiaodichComponent implements OnInit,OnDestroy {
 public  action:any;
 public subscription!: Subscription;

  constructor(
    private router:Router,
    private actionService:ActionService,
    
  ) { }
 vi(){
   this.router.navigate(['vi'])
 }
  ngOnInit()
   {
    this.displaylist();
  }
  displaylist(){
   this.actionService.getAllActions('khanhya')//thay=user
    .subscribe((data: Array<Action> ) => this. action= data)
    //console.log(data)

  }
  ngOnDestroy(){
    if (this.subscription){
       this.subscription.unsubscribe();
     }
    }
    onDeleteAction(id:number){
      this.subscription=this.actionService.deleteAction(id).subscribe(data => {
         this.updateDataAfterDelete(id);
         //console.log(data);
       });
   
   
    }
    
      updateDataAfterDelete(id:number){
        for(var i=0;i<this.action.length;i++){
          if (this.action[i].id==id){
            this.action.splice(i,1);
           break;
          }
        }
     
     
      } 
   
  Themgiaodich(){
    this.router.navigate(['themgiaodich']);
  }
  //edit(){
    //this.router.navigate(['edit'])
 // }
  
 
}

