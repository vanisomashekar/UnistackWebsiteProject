import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanadainterviewguideComponent } from './canadainterviewguide.component';

describe('CanadainterviewguideComponent', () => {
  let component: CanadainterviewguideComponent;
  let fixture: ComponentFixture<CanadainterviewguideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanadainterviewguideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanadainterviewguideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
