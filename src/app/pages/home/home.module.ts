import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MaterialModule } from '../../shared/material/material.module';

import { HomeRoutingModule } from './home-routing.module';
import { LayoutComponent } from './layout.component';

// LANDING
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MytiComponent, NewsComponent, SubscribeComponent, MerchComponent  } from './landing-page/_components';

// SERVICES
import { ServicesComponent } from './services/services.component';
import { WhatCanIDoComponent, ContactUsComponent } from './services/_components';

// LISTEN TO MY MUSIC
import { ListenToMyMusicComponent } from './listen-to-my-music/listen-to-my-music.component';

// angular-modal-gallery
import 'hammerjs';
import 'mousetrap';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import { IgGalleryComponent } from './landing-page/_components/ig-gallery/ig-gallery.component';
import { TrackCardsComponent } from './listen-to-my-music/_components/track-cards/track-cards.component';


@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    GalleryModule.forRoot()
    // MaterialModule
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
  ],
  bootstrap: []
})
export class HomeModule { }
