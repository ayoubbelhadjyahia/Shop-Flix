import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../../Model/Product/Product";

@Injectable({
  providedIn: 'root'
})
export class ProductServService {

  constructor(private Http:HttpClient) {}
  getproduct(){
    return this.Http.get<Product[]>("http://localhost:8188/SpringMVC/Product/allproducts")
  }
  getOneProduct(id:number){
    return this.Http.get<Product>("http://localhost:8188/SpringMVC/Product/getProduct/"+id)
  }
  AddProduct(product:Product){
    return this.Http.put("http://localhost:8188/SpringMVC/Product/addproduct",product)
  }
  DeleteProduct(productId :number){
    return this.Http.delete("http://localhost:8188/SpringMVC/Product/deleteProduct/"+ productId);
  }



}
