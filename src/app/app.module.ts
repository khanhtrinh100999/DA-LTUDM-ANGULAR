import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//import { ComponentToViewComponent } from './components/component-to-view/component-to-view.component';
import { LoginComponent } from './components/login/login.component';
import {FormsModule} from '@angular/forms';
import { FormWorkComponent } from './components/form-work/form-work.component';
import { KbaoSoDuComponent } from './components/kbao-so-du/kbao-so-du.component';
import { DangkyComponent } from './components/dangky/dangky.component';
import {RouterModule,Routes} from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { ResetComponent } from './components/reset/reset.component';
import { DeleteComponent } from './components/delete/delete.component';
import { KiemTraComponent } from './components/kiem-tra/kiem-tra.component';
const appRoutes:Routes=[
  {
    path:'login', component:LoginComponent
  },
  {
    path:'dky', component: DangkyComponent
  },
  {
    path:'kbao', component: KbaoSoDuComponent
  },
  {
    path:'lviec', component: FormWorkComponent 
  },

  {
    path:'add', component: AddComponent
    },

  {
    path:'reset', component:ResetComponent 
    },
    {
    path:'delete', component:DeleteComponent
    },
    {
     path:"ktra", component:KiemTraComponent 
    },

    

 
    
 
  //{
  //path: '', redirectTo: '/login', pathMatch: 'full'
  //},
  {
    path:'ve',component:  AppComponent,
  }
   


]
@NgModule({
  declarations: [
    AppComponent,
    //ComponentToViewComponent,
    LoginComponent,
    FormWorkComponent,
    KbaoSoDuComponent,
    DangkyComponent,
    AddComponent,
    ResetComponent,
    DeleteComponent,
    KiemTraComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
