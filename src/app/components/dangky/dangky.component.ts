// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// @Component({
//   selector: 'app-dangky',
//   templateUrl: './dangky.component.html',
//   styleUrls: ['./dangky.component.css']
// })
// export class DangkyComponent implements OnInit {

//   constructor(private router:Router) { }

//   ngOnInit(): void {
//   }
//   vi(){
//   	this.router.navigate(['sodu'])
//   }
//   login(){
//   	this.router.navigate([''])
//   }

// }     // phan thay lam 

import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from './../../auth.service';

@Component({
  selector: 'app-dangky',
  templateUrl: './dangky.component.html',
  styleUrls: ['./dangky.component.css']
})
export class DangkyComponent implements OnInit {

  constructor(private router:Router,private fb:FormBuilder, private authenticationService: AuthenticationService) { }

  loginForm = this.fb.group({
    username:[''],
    password:['']
  });

  registerForm = this.fb.group({
    username :[''],
    gmail:[''],
    password:[''],
    fullname : [''],
  });
  ngOnInit() {
  }
  onBack(){
  this.router.navigate(['']);
  } 
  dangky() { 

    this.authenticationService.dangky(this.registerForm.value.username,this.registerForm.value.password, this.registerForm.value.fullname,this.registerForm.value.gmail)
    .subscribe((response: { status: any; }) => {
      var code = response.status;
      if(code == 201){
        alert("Đăng ky thành công");
        this.authenticationService.username=this.registerForm.value.username;
        this.authenticationService.password=this.registerForm.value.password;
        this.authenticationService.registerSuccessfulLogin(this.registerForm.value.username)
        this.vi();
      }
      else{
        alert ("Đăng ky thất bại");
      }
    })
  }
  vi(){
    this.router.navigate(['sodu'])
  }
  dangnhap(){
    this.router.navigate([''])
  }

}
