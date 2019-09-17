import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityreviewsComponent } from './universityreviews.component';

describe('UniversityreviewsComponent', () => {
  let component: UniversityreviewsComponent;
  let fixture: ComponentFixture<UniversityreviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversityreviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityreviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
