import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lyrics',
  templateUrl: './lyrics.component.html',
  styleUrls: ['./lyrics.component.less']
})
export class LyricsComponent implements OnInit {

  sampleData = "<p>[Intro: Gio]</p><p>Yeah (ah-ah-ahem), Yeah</p><p>&nbsp;</p><p>[Chorus: Gio]</p><p>Bi-Bi-Bi-Bitch I get, what I want</p><p>Bicth I get, what I want</p><p>See this kicks, when I walk</p><p>Roundhouse kick you in the jaw</p><p>Bitch I get, what I want</p><p>&nbsp;</p><p>[Verse 1: Gio]</p><p>I don&rsquo;t know what&rsquo;s inside me</p><p>All I know&rsquo;s it&rsquo;s enticing</p><p>Better take cover cause my demon&rsquo;s coming out from hiding</p><p>My drought just turned to a flood</p><p>All you bitches better run I&rsquo;m a friend of</p><p>Bill got the well and go to fill it with blood</p><p>Give me another line Sniff it till I go blind</p><p>Feel like Jackyll killing rappers think you</p><p>should run and hide</p><p>The throne I see is empty</p><p>This world&rsquo;s ripe for the taking</p><p>Hope you don&rsquo;t mind</p><p>I steer this year&rsquo;s listeners to my waking</p><p>Show me your fears</p><p>Let me into your brain</p><p>Get to rewiring now I see something crawling and it&rsquo;s going insane</p><p>Amend the weirs</p><p>Let me see the river start to gather</p>"

  constructor() { }

  ngOnInit(): void {
  }

}
