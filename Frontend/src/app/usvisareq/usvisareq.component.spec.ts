import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsvisareqComponent } from './usvisareq.component';

describe('UsvisareqComponent', () => {
  let component: UsvisareqComponent;
  let fixture: ComponentFixture<UsvisareqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsvisareqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsvisareqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
