import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HarvardreviewsComponent } from './harvardreviews.component';

describe('HarvardreviewsComponent', () => {
  let component: HarvardreviewsComponent;
  let fixture: ComponentFixture<HarvardreviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HarvardreviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HarvardreviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
