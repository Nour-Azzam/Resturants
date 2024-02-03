import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [MatIconModule, MatButtonModule],
  exports: [HeaderComponent],
  providers: [],
})
export class HeaderModule {}
