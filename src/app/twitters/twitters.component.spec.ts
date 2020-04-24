import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwittersComponent } from './twitters.component';

describe('TwittersComponent', () => {
  let component: TwittersComponent;
  let fixture: ComponentFixture<TwittersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwittersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwittersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
