import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsinterviewguideComponent } from './usinterviewguide.component';

describe('UsinterviewguideComponent', () => {
  let component: UsinterviewguideComponent;
  let fixture: ComponentFixture<UsinterviewguideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsinterviewguideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsinterviewguideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
