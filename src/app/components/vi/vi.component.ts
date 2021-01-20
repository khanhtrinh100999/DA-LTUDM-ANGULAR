import { Component, OnInit ,OnDestroy} from '@angular/core';
import { Router ,ActivatedRoute,Params } from '@angular/router';
import { ActionService} from './../../service/action.service';
import {Action} from './../../model/action.model';
import  {Subscription} from 'rxjs';
import { ViService} from './../../service/vi.service';
import {Vi} from './../../model/vi.model';
@Component({
  selector: 'app-vi',
  templateUrl: './vi.component.html',
  styleUrls: ['./vi.component.css']
})
export class ViComponent implements OnInit,OnDestroy {
  public  action:any;
 public subscription!: Subscription;
 public  vi1:any;
 public subscriptionParams! :Subscription;


  constructor(private router:Router,
    private actionService:ActionService,
    private viService:ViService,
    public activatedRouteService :ActivatedRoute) { }

  ngOnInit(): void {
    this.displayvi();

  }
  displayvi(){
    this.updateVi;
    this.subscriptionParams=this.activatedRouteService.params.subscribe((data:Params )=> {
      let username=data['username'];
      this.subscription=this.viService.getVi(username).subscribe((vi1:any)=>{
       this.vi1=vi1;
      
      });
    });


  }
  updateVi(status_detail:string){
      for(var i=0;i<this.action.length;i++){
        if(this.action[i].status_detail=="thu"){
          this.vi1.money=this.vi1.money+this.action[i].money_detail;
        }
        else {
          if(this.action[i].status_detail=="chi"){
            this.vi1.money=this.vi1.money-this.action[i].money_detail;
          }
        }
      }
    }
  dsgiaodich(){
  	this.router.navigate(['dsgiaodich'])
  }
  ngOnDestroy(){
    if (this.subscription){
       this.subscription.unsubscribe();
     }
    }


}
