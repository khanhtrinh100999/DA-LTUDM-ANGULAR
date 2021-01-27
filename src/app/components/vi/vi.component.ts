import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
//import { ActionService} from './../../service/action.service';
//import {Action} from './../../model/action.model';
import { Subscription } from 'rxjs';
import { ViService } from './../../service/vi.service';
import { Vi } from './../../model/vi.model';
import { AuthenticationService } from 'src/app/auth.service';
@Component({
  selector: 'app-vi',
  templateUrl: './vi.component.html',
  styleUrls: ['./vi.component.css']
})
export class ViComponent implements OnInit, OnDestroy {
  public action: any;
  public subscription!: Subscription;
  public vi!: Vi;
  public subscriptionParams!: Subscription;
  public username: any;


  constructor(private router: Router,
    //private actionService:ActionService,
    private viService: ViService,
    public activatedRouteService: ActivatedRoute,
    private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.action= new Vi();
    //this.loadData();
    this.displaylist();
  }
  loadData(){
    this.subscriptionParams=this.activatedRouteService.params.subscribe((data:Params )=> {
      let username=data['username'];
      //let id=data['id'];
      this.subscription=this.viService.getVi(username).subscribe((vi:any)=>{
       this.vi=vi;
        console.log("vi",this.vi.chi);
      });
    });

  }


  displaylist(){
    this.username= this.authenticationService.getLoggedInUserName();
    this.viService.getVi(this.username).subscribe((data : Array<Vi> )=>
           this. action =data 
          
           

           );
  }

  
  onEditVi() {
    
    this.action.username = this.authenticationService.getLoggedInUserName();
    console.log( this.action.username)
    this.subscription = this.viService.updateVi(this.action).subscribe(data => {
      this.router.navigate(['dsgiaodich']);
    });

  }

  dsgiaodich() {
    this.router.navigate(['dsgiaodich'])
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    if (this.subscriptionParams) {
      this.subscriptionParams.unsubscribe();
    }

  }


}
