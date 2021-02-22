import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MaterialModule } from '../../shared/material/material.module';
import { PrimengModule } from '../../shared/material/primeng.module';

import { HomeRoutingModule } from './home-routing.module';
import { LayoutComponent } from './layout.component';

// LANDING
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MytiComponent, NewsComponent, SubscribeComponent, MerchComponent, IgGalleryComponent  } from './landing-page/_components';

// SERVICES
import { ServicesComponent } from './services/services.component';
import { WhatCanIDoComponent, ContactUsComponent } from './services/_components';

// BEATS
import { BeatsComponent } from './beats/beats.component';
// import { WhatCanIDoComponent, ContactUsComponent } from './beats/_components';

// LISTEN TO MY MUSIC
import { ListenToMyMusicComponent } from './listen-to-my-music/listen-to-my-music.component';
import { TrackCardsComponent } from './listen-to-my-music/_components';

// NEWS
import { LatestNewsComponent } from './latest-news/latest-news.component';

// angular-modal-gallery
import 'hammerjs';
import 'mousetrap';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import { BeatShopComponent } from './beats/_components/beat-shop/beat-shop.component';


@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    GalleryModule.forRoot(),
    // MaterialModule,
    PrimengModule
  ],
  declarations: [
    LayoutComponent,
    LandingPageComponent,
    MytiComponent,
    NewsComponent,
    SubscribeComponent,
    ServicesComponent,
    MerchComponent,
    IgGalleryComponent,
    WhatCanIDoComponent,
    ContactUsComponent,
    ListenToMyMusicComponent,
    TrackCardsComponent,
<<<<<<< HEAD
    BeatsComponent,
    BeatShopComponent
=======
    LatestNewsComponent,
>>>>>>> 407999d92bfa4b7f65135d5e81742ce3787711d7
  ],
  bootstrap: []
})
export class HomeModule { }
