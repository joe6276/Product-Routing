import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Product } from 'src/app/Interface/product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
id!:string
product?:Product
  constructor( private route:ActivatedRoute, private router:Router ,private productService:ProductService) { }

  ngOnInit(): void {
      //  this.id=this.route.snapshot.params['id']
      //   this.product=this.productService.getProduct(this.id)
      this.route.params.subscribe((params:Params)=>{
        this.id=params['id']
        this.product=this.productService.getProduct(this.id)
      })

      
  }
  edit(){
    this.router.navigate(['edit'],{relativeTo:this.route,queryParamsHandling:'preserve'})
  }
}
