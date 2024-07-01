import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleServicesComponent } from './single-services.component';

describe('SingleServicesComponent', () => {
  let component: SingleServicesComponent;
  let fixture: ComponentFixture<SingleServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleServicesComponent]
    });
    fixture = TestBed.createComponent(SingleServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
