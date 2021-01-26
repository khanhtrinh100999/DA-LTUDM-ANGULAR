// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// //import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { DangkyComponent } from './components/dangky/dangky.component';
// import { DangnhapComponent } from './components/dangnhap/dangnhap.component';
// import { DsgiaodichComponent } from './components/dsgiaodich/dsgiaodich.component';
// import { KhaibaosoduComponent } from './components/khaibaosodu/khaibaosodu.component';
// import { ThemgiaodichComponent } from './components/themgiaodich/themgiaodich.component';
// import { ThongtingiaodichComponent } from './components/thongtingiaodich/thongtingiaodich.component';
// import { ViComponent } from './components/vi/vi.component';
// import {FormsModule} from '@angular/forms';
// import {RouterModule,Routes} from '@angular/router';
// import {ActionService} from './service/action.service';
// import {AuthenticationService } from './auth.service';

// import  {HttpClientModule} from '@angular/common/http';
// const appRoutes:Routes=[
//   {
//     path:'', component:DangnhapComponent
//   },
//   {
//     path:'dangky', component: DangkyComponent
//   },
//   {
//     path:'sodu', component: KhaibaosoduComponent 
//   },
//   {
//     path:'thoat',component:  AppComponent,
//   },

//   {
//     path:'dsgiaodich', component: DsgiaodichComponent,

//   },

//       {
//         path:'themgiaodich', component: ThemgiaodichComponent
//         },
//         {path :':id', component: ThongtingiaodichComponent
//           },
//           {
//             path:'vi', component:ViComponent
//             },








//   ]
// @NgModule({
//   declarations: [
//     AppComponent,
//     DangkyComponent,
//     DangnhapComponent,
//     DsgiaodichComponent,
//     KhaibaosoduComponent,
//     ThemgiaodichComponent,
//     ThongtingiaodichComponent,
//     ViComponent
//   ],
//   imports: [
//     BrowserModule,
//     //AppRoutingModule,
//     FormsModule,
//     HttpClientModule,
//     RouterModule.forRoot(appRoutes),
//   ],

// providers: [ActionService],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }



import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DangkyComponent } from './components/dangky/dangky.component';
import { DangnhapComponent } from './components/dangnhap/dangnhap.component';
import { DsgiaodichComponent } from './components/dsgiaodich/dsgiaodich.component';
import { KhaibaosoduComponent } from './components/khaibaosodu/khaibaosodu.component';
import { ThemgiaodichComponent } from './components/themgiaodich/themgiaodich.component';
import { ThongtingiaodichComponent } from './components/thongtingiaodich/thongtingiaodich.component';
import { ViComponent } from './components/vi/vi.component';
//import { ComponentToViewComponent } from './Components/component-to-view/component-to-view.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
//import {DataService} from './data.service'
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from './http-interceptor.service';
import { HttpClientModule } from '@angular/common/http';
import { ThongkeComponent } from './components/thongke/thongke.component';
const appRoutes: Routes = [
  {
    path: '', component: DangnhapComponent
  },
  // {
  //   path:'vi', component:ViComponent
  //   },
  
  {
    path: 'dsgiaodich', component: DsgiaodichComponent
  },
  {
    path: 'vi', component: ViComponent
  },
  {
    path: 'dangky', component: DangkyComponent
  },

  {
    path: 'sodu', component: KhaibaosoduComponent
  },

  {
    path: 'themgiaodich', component: ThemgiaodichComponent
  },

  // {
  //   path:'thongtingiaodich', component: ThongtingiaodichComponent
  //   },
  {
    path: ':id_detail', component: ThongtingiaodichComponent
  },

  {
    path: 'thongke', component: ThongkeComponent,
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
    ThongkeComponent,
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
