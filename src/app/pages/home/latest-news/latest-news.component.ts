import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.less']
})
export class LatestNewsComponent implements OnInit {
  pageTitle = 'Latest News'

  constructor() { }

  ngOnInit(): void {
  }

  displayModal: boolean;

  showModalDialog() {
    this.displayModal = true;
  }

}
