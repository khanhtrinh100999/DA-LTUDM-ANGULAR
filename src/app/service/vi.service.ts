import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Vi} from './../model/vi.model';


@Injectable({
  providedIn: 'root'
})
export class ViService {
 // public API: string ='http://localhost:3000/action';
 public API:string='http://192.168.48.124:8080/wallet'


  constructor(public http:HttpClient) {

   }
   addVi(vi:any){
         return this.http.post(this.API+'/add',vi);
       
         }  
    updateVi(vi:any){
        
           return this.http.put(this.API+'/put'+vi.username,vi);
        
            
              }  
    getVi(username:string){
    return this.http.get(this.API+'/'+username);
             
                 }
    
                    
}
