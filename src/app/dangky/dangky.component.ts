import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../auth.service';

@Component({
  selector: 'app-dangky',
  templateUrl: './dangky.component.html',
  styleUrls: ['./dangky.component.css']
})
export class DangkyComponent implements OnInit {

  constructor(private router:Router,private fb:FormBuilder, private authenticationService: AuthenticationService) { }

  registerForm = this.fb.group({
    username :[''],
    gmail:[''],
    password:[''],
    fullname : [''],
  });
  ngOnInit() {
  }
  onBack(){
  this.router.navigate(['/dangnhap']);
  } 
  dangky() { 
    this.authenticationService.dangky(this.registerForm.value.fullname,this.registerForm.value.gmail,this.registerForm.value.password,this.registerForm.value.username)
    .subscribe((response: { status: any; }) => {
      var code = response.status;
      if(code == 201){
        alert("Đăng ky thành công");
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
  	this.router.navigate(['dangnhap'])
  }

}
