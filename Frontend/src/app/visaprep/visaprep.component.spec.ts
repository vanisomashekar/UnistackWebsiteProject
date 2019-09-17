import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisaprepComponent } from './visaprep.component';

describe('VisaprepComponent', () => {
  let component: VisaprepComponent;
  let fixture: ComponentFixture<VisaprepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisaprepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisaprepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
