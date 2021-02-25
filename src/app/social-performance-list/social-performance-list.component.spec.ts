import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialPerformanceListComponent } from './social-performance-list.component';

describe('SocialPerformanceListComponent', () => {
  let component: SocialPerformanceListComponent;
  let fixture: ComponentFixture<SocialPerformanceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialPerformanceListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialPerformanceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
