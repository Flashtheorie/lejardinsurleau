import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChambrecharlotteComponent } from './chambrecharlotte.component';

describe('ChambrecharlotteComponent', () => {
  let component: ChambrecharlotteComponent;
  let fixture: ComponentFixture<ChambrecharlotteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChambrecharlotteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChambrecharlotteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
