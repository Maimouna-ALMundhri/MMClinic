import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrLogComponent } from './dr-log.component';

describe('DrLogComponent', () => {
  let component: DrLogComponent;
  let fixture: ComponentFixture<DrLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
