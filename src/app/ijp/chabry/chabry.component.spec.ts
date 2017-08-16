import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChabryComponent } from './chabry.component';

describe('ChabryComponent', () => {
  let component: ChabryComponent;
  let fixture: ComponentFixture<ChabryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChabryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChabryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
