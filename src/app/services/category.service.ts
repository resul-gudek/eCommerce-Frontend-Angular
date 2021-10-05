import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
 apiurl = "https://localhost:44314/api/"
  constructor(private httpClient:HttpClient) { }

   getCategories():Observable<ListResponseModel<Category>>{
     let newPath = this.apiurl + "categories/getall"
     return this.httpClient.get<ListResponseModel<Category>>(newPath);
   }
   


}
