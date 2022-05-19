import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
isinvalid:boolean=false
  constructor(private productService:ProductService, private router:Router) { }

  ngOnInit(): void {
  }
  addProduct(name:string, description:string, price:number){
    if(name.length===0 || description.length===0 || price<=0){
      this.isinvalid=true
      setTimeout(()=>{
        this.isinvalid=false
      },5000)
    }
    else{
      this.productService.addProduct(name,description,price)
      this.router.navigate(['products'])
    }
  }
}
