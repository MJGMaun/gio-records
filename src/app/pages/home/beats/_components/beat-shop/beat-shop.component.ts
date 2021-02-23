import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'beat-shop',
  templateUrl: './beat-shop.component.html',
  styleUrls: ['./beat-shop.component.less']
})
export class BeatShopComponent implements OnInit {
  bpm: any[];
  mood: any[];

  selectedBPM;
  selectedMood;

  products: any[];

  constructor() {

    this.bpm = [
        {name: '170', code: '170'},
        {name: '180', code: '180'},
        {name: '190', code: '190'},
        {name: '200', code: '200'},
        {name: '210', code: '210'}
    ];

    this.mood = [
        {name: 'Funk', code: 'Funk'},
        {name: 'RNB', code: 'RNB'},
        {name: 'Rock', code: 'Rock'},
        {name: 'Pop', code: 'Pop'},
    ];

    this.products = [
        {
            id: 1, 
            img: 'https://via.placeholder.com/150', 
            title: "Title",
            bpm: "123",
            mood: "Cool",
            time: "1:50"
        },
        {
            id: 2, 
            img: 'https://via.placeholder.com/150', 
            title: "Title",
            bpm: "123",
            mood: "Cool",
            time: "1:50"
        },
        {
            id: 3, 
            img: 'https://via.placeholder.com/150', 
            title: "Title",
            bpm: "123",
            mood: "Cool",
            time: "1:50"
        },
        {
            id: 4, 
            img: 'https://via.placeholder.com/150', 
            title: "Title",
            bpm: "123",
            mood: "Cool",
            time: "1:50"
        },
    ];
  }

  ngOnInit(): void {
  }


}
