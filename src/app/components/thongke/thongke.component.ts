import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/auth.service';
import { ViService } from 'src/app/service/vi.service';
import  {Subscription} from 'rxjs';
import { Vi } from 'src/app/model/vi.model';

@Component({
  selector: 'app-thongke',
  templateUrl: './thongke.component.html',
  styleUrls: ['./thongke.component.css']
})
export class ThongkeComponent implements OnInit ,OnDestroy {
  public subscription!: Subscription;
  public action: any;
  public vi!: Vi;
  public subscriptionParams! :Subscription;
  public username:any;


  constructor(private router:Router,
    private viService:ViService,
    private authenticationService:AuthenticationService) { }

  ngOnInit(): void {
    this.displaylist();
  }
  // displaylist(){
  //   this.username= this.authenticationService.getLoggedInUserName();
  //   this.viService. getVi(this.username).subscribe((vi:any)=>{
  //          this.vi=vi;
          
  //          });
  // }

  displaylist(){
    this.username= this.authenticationService.getLoggedInUserName();
    this.viService.getVi(this.username).subscribe((data : Array<Vi> )=>
           this. action =data 
           // console.log(this.action.chi);}
           

           );
  }

  thoat(){
    this.router.navigate(['dsgiaodich']);
  }
  ngOnDestroy(){
    if(this.subscription){
  		this.subscription.unsubscribe();
  	}
    if(this.subscriptionParams){
      this.subscriptionParams.unsubscribe();
    }
  	
    }
}
