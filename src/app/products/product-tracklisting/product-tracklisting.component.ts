import { Component, OnInit } from '@angular/core';
import {Album} from '../../album'
import { ProductService } from '../../product.service'
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-product-tracklisting',
  templateUrl: './product-tracklisting.component.html',
  styleUrls: ['./product-tracklisting.component.css']
})
export class ProductTracklistingComponent implements OnInit {
  selectedId:number;
  albumInfo: Album;

  constructor(private route: ActivatedRoute, private _productService:ProductService) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');      
    
    this._productService.getAlbums()
    .subscribe( response => this.albumInfo = <Album>response.find(x=> x.id === id));
  }

}
