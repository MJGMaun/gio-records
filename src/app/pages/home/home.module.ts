import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { LayoutComponent } from './layout.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MytiComponent } from './landing-page/_components/myti/myti.component';
import { NewsComponent } from './landing-page/_components/news/news.component';
import { SubscribeComponent } from './landing-page/_components/subscribe/subscribe.component';
import { ServicesComponent } from './services/services.component';



@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    LayoutComponent,
    LandingPageComponent,
    MytiComponent,
    NewsComponent,
    SubscribeComponent,
    ServicesComponent,
  ],
  bootstrap: []
})
export class HomeModule { }
