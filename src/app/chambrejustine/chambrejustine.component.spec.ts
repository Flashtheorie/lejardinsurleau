import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChambrejustineComponent } from './chambrejustine.component';

describe('ChambrejustineComponent', () => {
  let component: ChambrejustineComponent;
  let fixture: ComponentFixture<ChambrejustineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChambrejustineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChambrejustineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
