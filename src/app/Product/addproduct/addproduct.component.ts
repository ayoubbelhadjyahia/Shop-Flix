import { Component, OnInit } from '@angular/core';
import {Product} from "../../Model/Product/Product";
import {ProductServService} from "../../Service/ProductServ/product-serv.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  produit!:Product

  constructor(private pr:ProductServService,private route:Router) { }

  ngOnInit(): void {
    this.produit=new Product
  }
  AddProduct(){

    this.pr.AddProduct(this.produit).subscribe({
      next:()=>this.route.navigateByUrl("Detail/:id")
    });
  }

}
