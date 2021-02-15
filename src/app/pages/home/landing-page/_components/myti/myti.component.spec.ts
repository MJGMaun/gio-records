import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MytiComponent } from './myti.component';

describe('MytiComponent', () => {
  let component: MytiComponent;
  let fixture: ComponentFixture<MytiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MytiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MytiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
