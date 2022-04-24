import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OthernavbarComponent } from './othernavbar.component';

describe('OthernavbarComponent', () => {
  let component: OthernavbarComponent;
  let fixture: ComponentFixture<OthernavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OthernavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OthernavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
