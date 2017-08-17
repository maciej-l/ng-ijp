import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrudzComponent } from './grudz.component';

describe('GrudzComponent', () => {
  let component: GrudzComponent;
  let fixture: ComponentFixture<GrudzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrudzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrudzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
