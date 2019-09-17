import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AustraliainterviewguideComponent } from './australiainterviewguide.component';

describe('AustraliainterviewguideComponent', () => {
  let component: AustraliainterviewguideComponent;
  let fixture: ComponentFixture<AustraliainterviewguideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AustraliainterviewguideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AustraliainterviewguideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
