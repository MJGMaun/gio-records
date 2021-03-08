import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_services';
@Component({
  selector: 'news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less']
})
export class NewsComponent implements OnInit {

  recentNews: any = [];

  constructor( public _api: ApiService ) { }

  ngOnInit(): void {
    this.getNews();
  }

  getNews() {
    this._api.get('/News/RecentNews.json').subscribe((res)=> {
      console.log(res);
      this.recentNews = res;
    })
  }

}
