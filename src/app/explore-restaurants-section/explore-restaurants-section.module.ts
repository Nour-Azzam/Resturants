import { NgModule } from '@angular/core';
import { ExploreRestaurantsSectionComponent } from './explore-restaurants-section.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [ExploreRestaurantsSectionComponent],
  exports: [ExploreRestaurantsSectionComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
  ],
  providers: [],
})
export class ExploreRestaurantsSectionModule {}
