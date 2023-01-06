import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReparationPCComponent } from './reparation-pc.component';

describe('ReparationPCComponent', () => {
  let component: ReparationPCComponent;
  let fixture: ComponentFixture<ReparationPCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReparationPCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReparationPCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
