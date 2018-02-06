import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service'
import {Album} from '../../album'
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  albumInfo: Album;

  constructor(private route: ActivatedRoute, private _productService:ProductService) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');             

    this._productService.getAlbums()
    .subscribe( response => this.albumInfo = <Album>response.find(x=> x.id === id));
  }

}
