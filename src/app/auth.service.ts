import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  // BASE_PATH = "http://localhost:3000/posts"
  BASE_PATH = "http://192.168.52.11:8080"
  USER_NAME_SESSION = 'username_session'
  public username!: String;
  public password!: String;
  public fullname!: String;
  public gmail!: String;
  constructor(private http: HttpClient) {
  }
  dangnhap(username: string, password: string) {
    console.log(username)
    console.log(password)
    var params = new HttpParams()
      .set('username', username)
      .set('password', password);
    // return this.http.post<Response>(this.BASE_PATH + "/account/login", params, {
      return this.http.post<Response>(this.BASE_PATH + "/account/login", {username: username, password:password},
      {observe: 'response'
    });
  }
  dangky(username: String, password: String, fullname: String, gmail: String) {
    return this.http.post<Response>(this.BASE_PATH + "/account/register", { 
      fullname: fullname, gmail:gmail, password: password,username: username },
      { observe: 'response' });
  }


  createBasicAuthToken() {
    console.log(this.username + ":" + this.password);
    return 'Basic ' + window.btoa(this.username + ":" + this.password)
  }
  registerSuccessfulLogin(username:string) {
    sessionStorage.setItem(this.USER_NAME_SESSION, username)
  }
  logout() {
    sessionStorage.removeItem(this.USER_NAME_SESSION);
    this.username = "null";
    this.password = "null";
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION)
    if (user === null) return false
    return true
  }
  getLoggedInUserName() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION)
    if (user === null) return ''
    return user
  }
}


