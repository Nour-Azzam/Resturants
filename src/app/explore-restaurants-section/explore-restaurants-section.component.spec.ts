import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreRestaurantsSectionComponent } from './explore-restaurants-section.component';

describe('ExploreRestaurantsSectionComponent', () => {
  let component: ExploreRestaurantsSectionComponent;
  let fixture: ComponentFixture<ExploreRestaurantsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreRestaurantsSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreRestaurantsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
