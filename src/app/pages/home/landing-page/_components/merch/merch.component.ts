import { Component, OnInit } from '@angular/core';
import {
  Image,
  LineLayout,
  PlainGalleryConfig,
  PlainGalleryStrategy
} from '@ks89/angular-modal-gallery';

@Component({
  selector: 'merch',
  templateUrl: './merch.component.html',
  styleUrls: ['./merch.component.less']
})
export class MerchComponent implements OnInit {
  imageIndex = 1;
  galleryId = 1;
  isPlaying = true;

  merchImages: Image[] = [
    new Image(
      0,
      { // modal
        img: '../../../../../../assets/images/merch-1.png',
        description: 'Description 1'
      }
    ),
    new Image(
      1,
      { // modal
        img: '../../../../../../assets/images/merch-2.png',
        description: 'Description 2'
      }
    ),
    new Image(
      3,
      { // modal
        img: '../../../../../../assets/images/merch-3.png',
        description: 'Description 3'
      }
    ),
    new Image(
      4,
      { // modal
        img: '../../../../../../assets/images/merch-4.png',
        description: 'Description 4'
      }
    )
  ];


  constructor() { }

  ngOnInit(): void {
  }

  singleImage: Image[] = [this.merchImages[0]];
  singleImage2: Image[] = [this.merchImages[1]];
  singleImage3: Image[] = [this.merchImages[2]];
  singleImage4: Image[] = [this.merchImages[3]];

  plainGalleryRow: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.ROW,
    layout: new LineLayout({ width: '100%', height: 'auto' }, { length: 1, wrap: true }, 'flex-start')
  };

}
