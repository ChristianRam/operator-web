import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputsRowComponent } from './inputs-row.component';

describe('InputsRowComponent', () => {
  let component: InputsRowComponent;
  let fixture: ComponentFixture<InputsRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputsRowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputsRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
