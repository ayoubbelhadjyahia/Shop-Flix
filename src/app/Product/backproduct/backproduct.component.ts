import { Component, OnInit } from '@angular/core';
import {Product} from "../../Model/Product/Product";
import {ProductServService} from "../../Service/ProductServ/product-serv.service";

@Component({
  selector: 'app-backproduct',
  templateUrl: './backproduct.component.html',
  styleUrls: ['./backproduct.component.css']
})
export class BackproductComponent implements OnInit {
  listProduct!:Product[];
  constructor(private consumerProd:ProductServService) { }

  ngOnInit(): void {
    this.consumerProd.getproduct().subscribe({next: (data) => this.listProduct = data,


    });

  }
  delete(id:number){
    this.consumerProd.DeleteProduct(id).subscribe({next:()=>this.ngOnInit()});
  }

}
