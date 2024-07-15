import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllViewsComponent } from './all-views.component';

describe('AllViewsComponent', () => {
  let component: AllViewsComponent;
  let fixture: ComponentFixture<AllViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllViewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
