import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NortheasternReviewComponent } from './northeastern-review.component';

describe('NortheasternReviewComponent', () => {
  let component: NortheasternReviewComponent;
  let fixture: ComponentFixture<NortheasternReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NortheasternReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NortheasternReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
