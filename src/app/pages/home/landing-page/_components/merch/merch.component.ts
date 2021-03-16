import { Component, OnInit } from '@angular/core';

import {
  Image,
  LineLayout,
  PlainGalleryConfig,
  PlainGalleryStrategy
} from '@ks89/angular-modal-gallery';

import { ApiService } from 'src/app/_services';

@Component({
  selector: 'merch',
  templateUrl: './merch.component.html',
  styleUrls: ['./merch.component.less']
})
export class MerchComponent implements OnInit {
  featuredMerch: any = [];

  constructor(
    public _api: ApiService,
  ) { }

  ngOnInit(): void {
    this.getMerchList();
  }

  getMerchList() {
    this._api.get('/Merch/FeaturedMerch.json').subscribe((res)=> {
      this.featuredMerch = res;
    });
  }
}
