import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { DangkyComponent } from './dangky/dangky.component';
import { KhaibaosoduComponent } from './khaibaosodu/khaibaosodu.component';
import { DsgiaodichComponent } from './dsgiaodich/dsgiaodich.component';
import { ViComponent } from './vi/vi.component';
import { ThemgiaodichComponent } from './themgiaodich/themgiaodich.component';
import { ThongtingiaodichComponent } from './thongtingiaodich/thongtingiaodich.component';
//import { ComponentToViewComponent } from './Components/component-to-view/component-to-view.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';
//import {DataService} from './data.service'
import {HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from './http-interceptor.service';
import {HttpClientModule} from '@angular/common/http';
const appRoutes:Routes=[
  {
    path:'', component:DangnhapComponent
  },
  {
    path:'dangky', component: DangkyComponent
  },
  {
    path:'dsgiaodich', component: DsgiaodichComponent
  },
  {
    path:'sodu', component: KhaibaosoduComponent 
  },

  {
    path:'themgiaodich', component: ThemgiaodichComponent
    },

  {
    path:'thongtingiaodich', component: ThongtingiaodichComponent
    },
    {
    path:'vi', component:ViComponent
    },
  {
    path:'thoat',component:  AppComponent,
  }
  ]

@NgModule({
  declarations: [
    AppComponent,
    DangnhapComponent,
    DangkyComponent,
    KhaibaosoduComponent,
    DsgiaodichComponent,
    ViComponent,
    ThemgiaodichComponent,
    ThongtingiaodichComponent,
    //ComponentToViewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
