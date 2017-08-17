import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PulawComponent } from './pulaw.component';

describe('PulawComponent', () => {
  let component: PulawComponent;
  let fixture: ComponentFixture<PulawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PulawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PulawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
