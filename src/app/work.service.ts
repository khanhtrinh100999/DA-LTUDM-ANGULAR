import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WorkService {
  public API: string =" http://localhost:3000/product";
  constructor(public http:HttpClient) { }
}
