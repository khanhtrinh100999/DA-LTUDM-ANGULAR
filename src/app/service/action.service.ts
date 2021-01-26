import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Action} from './../model/action.model';

@Injectable({
  providedIn: 'root'
})
export class ActionService {
  //public API: string ='http://192.168.52.11:8080';

   public API: string ='http://192.168.43.54:8080';


  constructor(public http:HttpClient) { }
  getAllActions(username:any):Observable<Array<Action>> {
    return this.http.get<Array<Action>>(this.API+'/detail/all/'+username);
    }
    addAction(action:any){
      return this.http.post(this.API+'/detail/add',action);
     
      }   
  getAction(id_detail:number){
     return this.http.get(this.API+'/detail/get/'+id_detail);
  
      }
    updateAction(action:any){
        
      return this.http.put(this.API+'/detail/put/'+action.id_detail,action);

    
      }  
      deleteAction(id_detail:number){
        return this.http.delete(this.API+'/detail/delete/'+id_detail);
        }
  // getAllActions():Observable<Array<Action>> {
  //   return this.http.get<Array<Action>>(this.API);
  //   }
  //   addAction(action:any){
  //     return this.http.post(this.API,action);
  //     }   
  // getAction(id:number){
  //    return this.http.get(this.API+'/'+id);
  
  //     }
  //   updateAction(action:any){
        
  //     return this.http.put(this.API+'/'+action.id,action);

    
  //     }  
  //     deleteAction(id:number){
  //       return this.http.delete(this.API+'/'+id);
  //       }
      
}
