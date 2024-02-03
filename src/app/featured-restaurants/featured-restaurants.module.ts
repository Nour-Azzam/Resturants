import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeaturedRestaurantsComponent } from './featured-restaurants.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [FeaturedRestaurantsComponent],
  exports: [FeaturedRestaurantsComponent],
  imports: [CommonModule, MatCardModule],
  providers: [],
})
export class FeaturedestaurantsModule {}
