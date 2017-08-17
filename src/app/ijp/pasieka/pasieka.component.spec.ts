import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasiekaComponent } from './pasieka.component';

describe('PasiekaComponent', () => {
  let component: PasiekaComponent;
  let fixture: ComponentFixture<PasiekaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasiekaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasiekaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
