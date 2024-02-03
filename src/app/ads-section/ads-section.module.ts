import { NgModule } from '@angular/core';
import { AdsSectionComponent } from './ads-section.component';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [MatCardModule, CommonModule],
  declarations: [AdsSectionComponent],
  exports: [AdsSectionComponent],
  providers: [],
})
export class AdsSectionModule {}
