import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NwkComponent } from './nwk.component';

describe('NwkComponent', () => {
  let component: NwkComponent;
  let fixture: ComponentFixture<NwkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NwkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NwkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
