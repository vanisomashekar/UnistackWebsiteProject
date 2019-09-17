import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AustraliavisareqComponent } from './australiavisareq.component';

describe('AustraliavisareqComponent', () => {
  let component: AustraliavisareqComponent;
  let fixture: ComponentFixture<AustraliavisareqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AustraliavisareqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AustraliavisareqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
