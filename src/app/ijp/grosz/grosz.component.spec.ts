import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroszComponent } from './grosz.component';

describe('GroszComponent', () => {
  let component: GroszComponent;
  let fixture: ComponentFixture<GroszComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroszComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroszComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
