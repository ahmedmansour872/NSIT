import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadSliderComponent } from './head-slider.component';

describe('HeadSliderComponent', () => {
  let component: HeadSliderComponent;
  let fixture: ComponentFixture<HeadSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeadSliderComponent]
    });
    fixture = TestBed.createComponent(HeadSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
