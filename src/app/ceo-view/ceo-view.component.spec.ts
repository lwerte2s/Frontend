import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeoViewComponent } from './ceo-view.component';

describe('CeoViewComponent', () => {
  let component: CeoViewComponent;
  let fixture: ComponentFixture<CeoViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeoViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CeoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
