import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListenToMyMusicComponent } from './listen-to-my-music.component';

describe('ListenToMyMusicComponent', () => {
  let component: ListenToMyMusicComponent;
  let fixture: ComponentFixture<ListenToMyMusicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListenToMyMusicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListenToMyMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
