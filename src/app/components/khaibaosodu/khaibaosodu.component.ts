import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ViService } from './../../service/vi.service';
import { Vi } from './../../model/vi.model';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/auth.service';

@Component({
  selector: 'app-khaibaosodu',
  templateUrl: './khaibaosodu.component.html',
  styleUrls: ['./khaibaosodu.component.css']
})
export class KhaibaosoduComponent implements OnInit, OnDestroy {
  public vi: any;
  public username!: any;
  public subscription!: Subscription;
  public thu: any;
  public chi: any;
  constructor(public viService: ViService,
    public router: Router,
    private authenticationService: AuthenticationService

  ) { }

  ngOnInit(): void {
    this.vi = new Vi();
  }
  dsgiaodich() {
    this.router.navigate(['dsgiaodich'])

  }
  dangky() {
    this.router.navigate(['dangky'])
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  onAddVi() {
    //this.vi.id=3
    //this.vi.username = 'a';//thay bằng tên user sau đăng nhập
    this.username= this.authenticationService.getLoggedInUserName();
    this.thu=0;
    this.chi=0;
    this.subscription = this.viService.addVi(this.vi).subscribe(data => {

      this.router.navigate(['']);
    });

  }
}


