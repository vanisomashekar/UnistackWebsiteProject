import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UclareviewComponent } from './uclareview.component';

describe('UclareviewComponent', () => {
  let component: UclareviewComponent;
  let fixture: ComponentFixture<UclareviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UclareviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UclareviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
