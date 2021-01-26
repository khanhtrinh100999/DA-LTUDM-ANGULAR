// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class DataService {

//   constructor() { }
// }




import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';
import { Observable } from 'rxjs';
//import { data } from '..data/service';
export interface User {
 username: string;
 password: string;

 }
 @Injectable({
 providedIn: 'root'
 })
export class DataService {

 BASE_PATH="http://192.168.43.54:8080";
// rootURL="http://207.148.70.40:8080";
//BASE_PATH="http://localhost:3000/data"

constructor(private http: HttpClient) { }
getUserList():Observable<Array<User>> {
 return this.http.get<Array<User>>(this.BASE_PATH+"/user/all");
 
}
getUser(username: string):Observable<User> {
 return this.http.get<User>(this.BASE_PATH+"/user/get/"+username);

}
// constructor(private http: HttpClient) { }
//  getUserList():Observable<Array<User>> {
//   return this.http.get<Array<User>>(this.BASE_PATH);
 
//  }
//  getUser(username: string):Observable<User> {
//       return this.http.get<User>(this.BASE_PATH);
    
//      }
} 
