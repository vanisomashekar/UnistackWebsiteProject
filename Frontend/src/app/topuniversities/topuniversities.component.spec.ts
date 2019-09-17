import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopuniversitiesComponent } from './topuniversities.component';

describe('TopuniversitiesComponent', () => {
  let component: TopuniversitiesComponent;
  let fixture: ComponentFixture<TopuniversitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopuniversitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopuniversitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
