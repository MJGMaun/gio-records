import { Component, OnInit } from '@angular/core';

import { ApiService } from 'src/app/_services';

@Component({
  selector: 'track-cards',
  templateUrl: './track-cards.component.html',
  styleUrls: ['./track-cards.component.less']
})
export class TrackCardsComponent implements OnInit {

  pageTitle = 'All Releases';
  trackList:any = [];

  constructor(
    public _api: ApiService,
  ) { }

  ngOnInit(): void {
    this.getAllReleases();
  }

  getAllReleases() {
    this._api.get('/Tracks/AllReleases.json').subscribe((res)=> {
      this.trackList = res;
    });
  }

}
