// import { Component, OnInit ,OnDestroy} from '@angular/core';
// import {  ActivatedRoute, Router } from '@angular/router';
// import { ActionService} from './../../service/action.service';
// import {Action} from './../../model/action.model';
// import  {Subscription} from 'rxjs';
// import { ViService} from './../../service/vi.service';
// import {Vi} from './../../model/vi.model';
// import {DataService} from './../../data.service'
// //import {User} from './../../data.service'
// import { AuthenticationService } from 'src/app/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionService } from './../../service/action.service';
import { Action } from './../../model/action.model';
import { Subscription } from 'rxjs';
import { ViService } from './../../service/vi.service';
import { Vi } from './../../model/vi.model';
//import {DataService} from './../../data.service'
//import {User} from './../../data.service'
import { AuthenticationService } from 'src/app/auth.service';
@Component({
  selector: 'app-dsgiaodich',
  templateUrl: './dsgiaodich.component.html',
  styleUrls: ['./dsgiaodich.component.css']
})
export class DsgiaodichComponent implements OnInit, OnDestroy {
  public action: any;
  public subscription!: Subscription;
  public vi: any;
  public username!: any;
  public password: any;
  public date_detail: any;

  constructor(
    private router: Router,
    private actionService: ActionService,
    //private userSevice:DataService,
    private authenticationService: AuthenticationService,
    // private activatedRoute:ActivatedRoute,
    // private viService:ViService

  ) { }
  vi1() {
    this.router.navigate(['vi'])
  }
  ngOnInit() {
    // this.activatedRoute.queryParams.subscribe(data => {
    //   console.log(data);
    //   let date_detail=data['date_detail'];
    //   this.action=this.actionService.getAllActions(date_detail);

    // });
    this.displaylist();


  }

  displaylist() {
    this.username = this.authenticationService.getLoggedInUserName();
    this.actionService.getAllActions(this.username)//thay=user
      .subscribe((data: Array<Action>) => this.action = data)
    //console.log(data)

  }



  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  onDeleteAction(id_detail: number) {
    this.subscription = this.actionService.deleteAction(id_detail).subscribe(data => {
      this.updateDataAfterDelete(id_detail);
      //console.log(data);
    });


  }

  updateDataAfterDelete(id_detail: number) {
    for (var i = 0; i < this.action.length; i++) {
      if (this.action[i].id_detail == id_detail) {
        this.action.splice(i, 1);
        break;
      }
    }


  }
  thoat() {

    this.username = this.authenticationService.logout();
    this.password = this.authenticationService.logout();
    this.router.navigate([''])
  }
  Thongke() {
    this.router.navigate(['thongke']);
  }
  Themgiaodich() {
    this.router.navigate(['themgiaodich']);
  }
  //edit(){
  //this.router.navigate(['edit'])
  // }

  //  onSearch(){
  //    this.router.navigate(['/dsgiaodich'],{queryParams:{date_detail:this.date_detail? this.date_detail:''}});

  //   }
}

