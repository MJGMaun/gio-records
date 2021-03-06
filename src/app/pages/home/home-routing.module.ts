import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ServicesComponent } from './services/services.component';
import { ListenToMyMusicComponent } from './listen-to-my-music/listen-to-my-music.component';
import { BeatsComponent } from './beats/beats.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { BlogComponent } from './blog/blog.component';
import { LyricsComponent } from './lyrics/lyrics.component';

const routes: Routes = [
  {
      path: '', component: LayoutComponent,
      children: [
          { path: '', component: LandingPageComponent },
          { path: 'services', component: ServicesComponent },
          { path: 'listen', component: ListenToMyMusicComponent },
          { path: 'beats', component: BeatsComponent },
          { path: 'news', component: LatestNewsComponent },
          { path: 'blog', component: BlogComponent },
          { path: 'lyrics', component: LyricsComponent },
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
