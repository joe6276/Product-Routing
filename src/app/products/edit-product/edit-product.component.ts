import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Product } from 'src/app/Interface/product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  allowedit:boolean=false;
  isinvalid=false
  productname=''
   productdescription=''
    price=0
    product?:Product
    id!:string
  constructor( private route:ActivatedRoute, private productService:ProductService, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
        this.id=params['id']
        this.product= this.productService.getProduct(this.id)
        if(this.product){
          this.productname=this.product.name,
          this.productdescription=this.product.description
          this.price= this.product.price
        }
    })
    this.route.queryParams.subscribe((qp:Params)=>{
      this.allowedit=qp['allowEdit']==='1'?true:false
    })
  }
  editProduct(){
    if(this.productname.length===0 || this.productdescription.length===0 || this.price<=0){
      this.isinvalid=true
    }
    this.productService.updateProduct( this.id, this.productname,this.productdescription,this.price)
    this.router.navigate(['products'])
  }

}
