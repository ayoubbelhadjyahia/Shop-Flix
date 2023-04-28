import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductServService} from "../../Service/ProductServ/product-serv.service";
import {Product} from "../../Model/Product/Product";

@Component({
  selector: 'app-detailproduct',
  templateUrl: './detailproduct.component.html',
  styleUrls: ['./detailproduct.component.css']
})
export class DetailproductComponent implements OnInit {
id!:number
  product!:Product

  constructor(private route : ActivatedRoute,private constr:ProductServService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.constr.getOneProduct(this.id).subscribe({next:(data)=>this.product=data,
    });
  }

}
