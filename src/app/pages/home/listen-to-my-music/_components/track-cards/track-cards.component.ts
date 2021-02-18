import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'track-cards',
  templateUrl: './track-cards.component.html',
  styleUrls: ['./track-cards.component.less']
})
export class TrackCardsComponent implements OnInit {

  pageTitle = 'All Releases';

  constructor() { }

  ngOnInit(): void {
  }

}
