import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Impression3dComponent } from './impression3d.component';

describe('Impression3dComponent', () => {
  let component: Impression3dComponent;
  let fixture: ComponentFixture<Impression3dComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Impression3dComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Impression3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
