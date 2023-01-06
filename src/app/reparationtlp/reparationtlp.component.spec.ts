import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReparationtlpComponent } from './reparationtlp.component';

describe('ReparationtlpComponent', () => {
  let component: ReparationtlpComponent;
  let fixture: ComponentFixture<ReparationtlpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReparationtlpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReparationtlpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
