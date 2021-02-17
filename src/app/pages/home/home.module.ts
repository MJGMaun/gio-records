import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MaterialModule } from '../../shared/material/material.module';

import { HomeRoutingModule } from './home-routing.module';
import { LayoutComponent } from './layout.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MytiComponent } from './landing-page/_components/myti/myti.component';
import { NewsComponent } from './landing-page/_components/news/news.component';
import { SubscribeComponent } from './landing-page/_components/subscribe/subscribe.component';
import { ServicesComponent } from './services/services.component';
import { WhatCanIDoComponent } from './services/_components/what-can-i-do/what-can-i-do.component';
import { ContactUsComponent } from './services/_components/contact-us/contact-us.component';



@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    // MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [
    LayoutComponent,
    LandingPageComponent,
    MytiComponent,
    NewsComponent,
    SubscribeComponent,
    ServicesComponent,
    WhatCanIDoComponent,
    ContactUsComponent,
  ],
  bootstrap: []
})
export class HomeModule { }
