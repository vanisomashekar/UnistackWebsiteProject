import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsureviewComponent } from './csureview.component';

describe('CsureviewComponent', () => {
  let component: CsureviewComponent;
  let fixture: ComponentFixture<CsureviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsureviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsureviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
