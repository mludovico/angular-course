import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalButtonComponent } from './signal-button.component';

describe('SignalButtonComponent', () => {
  let component: SignalButtonComponent;
  let fixture: ComponentFixture<SignalButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignalButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
