import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredepartureComponent } from './predeparture.component';

describe('PredepartureComponent', () => {
  let component: PredepartureComponent;
  let fixture: ComponentFixture<PredepartureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredepartureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredepartureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
