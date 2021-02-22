import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeatShopComponent } from './beat-shop.component';

describe('BeatShopComponent', () => {
  let component: BeatShopComponent;
  let fixture: ComponentFixture<BeatShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeatShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeatShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
