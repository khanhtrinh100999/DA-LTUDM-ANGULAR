import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Action} from './../model/action.model';

@Injectable()
export class ActionService {
  public API: string ='http://192.168.52.11:8080';

   //public API: string ='http://localhost:3000/action';


  constructor(public http:HttpClient) { }
  getAllActions(user:any):Observable<Array<Action>> {
    return this.http.get<Array<Action>>(this.API+'/detail/all/'+user);
    }
    addAction(action:any){
      return this.http.post(this.API+'/detail/add',action);
     
      }   
  getAction(id:number){
     return this.http.get(this.API+'/'+id);
  
      }
    updateAction(action:any){
        
      return this.http.put(this.API+'/'+action.id,action);

    
      }  
      deleteAction(id_detail:number){
        return this.http.delete(this.API+'/detail/delete/'+id_detail);
        }
      
}
