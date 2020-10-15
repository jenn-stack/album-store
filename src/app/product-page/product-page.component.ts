import { Component, OnInit } from '@angular/core';
import { ProductDescriptionComponent } from 'app/product-description/product-description.component';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  ProductDescriptionComponent;

  constructor() { }

  ngOnInit() {
    
  }

  

}
