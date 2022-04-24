import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChambreamelieComponent } from './chambreamelie.component';

describe('ChambreamelieComponent', () => {
  let component: ChambreamelieComponent;
  let fixture: ComponentFixture<ChambreamelieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChambreamelieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChambreamelieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
