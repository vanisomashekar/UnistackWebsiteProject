import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanadavisareqComponent } from './canadavisareq.component';

describe('CanadavisareqComponent', () => {
  let component: CanadavisareqComponent;
  let fixture: ComponentFixture<CanadavisareqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanadavisareqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanadavisareqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
