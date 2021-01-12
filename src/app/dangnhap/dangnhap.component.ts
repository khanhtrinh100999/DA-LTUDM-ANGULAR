import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthenticationService } from "../auth.service";

@Component({
  selector: 'app-dangnhap',
  templateUrl: './dangnhap.component.html',
  styleUrls: ['./dangnhap.component.css']
})
export class DangnhapComponent implements OnInit {

  constructor(private router:Router,
    private fb:FormBuilder,
    private authenticationService:AuthenticationService ) { }

    loginForm = this.fb.group({
      username:[''],
      password:['']
    });
    errorMessage = 'Invalid Credentials';
    successMessage!: string;
    invalidLogin = false;
    loginSuccess = false;
  ngOnInit() {
  }
  dangnhap() {
    this.authenticationService.dangnhap(this.loginForm.value.username,this.loginForm.value.password).subscribe(
      response => {
        var code = response.status;
        if(code === 200){
          this.router.navigate(['/'])
        }
        else{
          alert("dang nhap that bai")
        }
      }

    )
  }
  dangky(){
  	this.router.navigate(['dangky'])

  }
  dsgiaodich(){
  	this.router.navigate(['dsgiaodich'])
  }

}
