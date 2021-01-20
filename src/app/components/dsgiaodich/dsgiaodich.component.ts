import { Component, OnInit ,OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import { ActionService} from './../../service/action.service';
import {Action} from './../../model/action.model';
import  {Subscription} from 'rxjs';
import { ViService} from './../../service/vi.service';
import {Vi} from './../../model/vi.model';
import {DataService} from './../../data.service'
import {User} from './../../data.service'
import { AuthenticationService } from 'src/app/auth.service';
@Component({
  selector: 'app-dsgiaodich',
  templateUrl: './dsgiaodich.component.html',
  styleUrls: ['./dsgiaodich.component.css']
})
export class DsgiaodichComponent implements OnInit,OnDestroy {
 public  action:any;
 public subscription!: Subscription;
 public  vi1:any;
 public username!:any;

  constructor(
    private router:Router,
    private actionService:ActionService,
    private userSevice:DataService,
    private authenticationService:AuthenticationService
    
  ) { }
 vi(){
   this.router.navigate(['vi'])
 }
  ngOnInit()
   {
    this.displaylist();
   

  }
  
  displaylist(){
      this.username= this.authenticationService.getLoggedInUserName();
      this.actionService.getAllActions(this.username)//thay=user
       .subscribe((data: Array<Action> ) => this. action= data)
    //console.log(data)
  
    }
    


  ngOnDestroy(){
    if (this.subscription){
       this.subscription.unsubscribe();
     }
    }
    onDeleteAction(id_detail:number){
      this.subscription=this.actionService.deleteAction(id_detail).subscribe(data => {
         this.updateDataAfterDelete(id_detail);
         //console.log(data);
       });
   
   
    }
    
      updateDataAfterDelete(id_detail:number){
        for(var i=0;i<this.action.length;i++){
          if (this.action[i].id_detail==id_detail){
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

