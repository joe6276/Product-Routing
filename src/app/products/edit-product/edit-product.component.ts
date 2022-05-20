import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/Interface/product';
import { CanComponentDeactivate } from 'src/app/Services/can-deactivate-guard.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit, CanComponentDeactivate {
  allowedit: boolean = false;
  isinvalid = false
  productname = ''
  productdescription = ''
  price = 0
  product?: Product
  id!: string;
  changesSaved: boolean = false;
  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) { }


  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id']
      this.product = this.productService.getProduct(this.id)
      if (this.product) {
        this.productname = this.product.name,
          this.productdescription = this.product.description
        this.price = this.product.price
      }
    })
    this.route.queryParams.subscribe((qp: Params) => {
      this.allowedit = qp['allowEdit'] === '1' ? true : false
    })
  }
  editProduct() {
    if (this.productname.length === 0 || this.productdescription.length === 0 || this.price <= 0) {
      this.isinvalid = true
    }
    this.productService.updateProduct(this.id, this.productname, this.productdescription, this.price)
    this.changesSaved = true;

    this.router.navigate(['products'])
  }

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    if (!this.allowedit) {
      return true;
    }

    if (
      (
        this.productname !== this.product?.name ||
        this.productdescription !== this.product?.description ||
        this.price !== this.product.price) && !this.changesSaved) {
      return confirm("Do you want to discard the changes?")
    } else {
      return true;
    }

  };



}
