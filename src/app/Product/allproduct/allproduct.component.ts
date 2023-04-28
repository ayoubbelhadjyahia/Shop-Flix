import { Component, OnInit } from '@angular/core';
import {ProductServService} from "../../Service/ProductServ/product-serv.service";
import {Product} from "../../Model/Product/Product";

@Component({
  selector: 'app-allproduct',
  templateUrl: './allproduct.component.html',
  styleUrls: ['./allproduct.component.css']
})
export class AllproductComponent implements OnInit {
  listProduct!:Product[];
  rating!:number;



  constructor(private consumerProd:ProductServService) { }

  ngOnInit(): void {

    this.consumerProd.getproduct().subscribe({next: (data) => this.listProduct = data,


    });


  }
  AddRating(){
    this.consumerProd.getproduct();
  }

}
