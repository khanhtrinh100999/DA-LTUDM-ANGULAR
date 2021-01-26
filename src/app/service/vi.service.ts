import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Vi} from './../model/vi.model';


@Injectable({
  providedIn: 'root'
})
export class ViService {
 // public API: string ='http://localhost:3000/action';
 public AP:string='http://192.168.43.54:8080/wallet'


  constructor(public http:HttpClient) {

   }
   addVi(vi:any){
         return this.http.post(this.AP+'/add/',vi);
       
         }  
    updateVi(vi:any){
        
           return this.http.put(this.AP+'/put/'+vi.username,vi);
        
            
              }  
    getVi(username:string){
    return this.http.get(this.AP+'/get/'+username);
             
                 }
    // getVi(username:any):Observable<Array<Vi>> {
    //   return this.http.get<Array<Vi>>(this.AP+'/get/'+username);
    //   }
   
    
                    
}
