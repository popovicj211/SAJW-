import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutwatchComponent } from './aboutwatch.component';

describe('AboutwatchComponent', () => {
  let component: AboutwatchComponent;
  let fixture: ComponentFixture<AboutwatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutwatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutwatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
