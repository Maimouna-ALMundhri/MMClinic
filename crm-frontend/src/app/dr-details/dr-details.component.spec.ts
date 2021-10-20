import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrDetailsComponent } from './dr-details.component';

describe('DrDetailsComponent', () => {
  let component: DrDetailsComponent;
  let fixture: ComponentFixture<DrDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
