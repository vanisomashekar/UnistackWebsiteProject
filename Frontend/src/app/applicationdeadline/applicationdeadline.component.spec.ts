import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationdeadlineComponent } from './applicationdeadline.component';

describe('ApplicationdeadlineComponent', () => {
  let component: ApplicationdeadlineComponent;
  let fixture: ComponentFixture<ApplicationdeadlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationdeadlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationdeadlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
