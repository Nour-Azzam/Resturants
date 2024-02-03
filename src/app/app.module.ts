import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientXsrfModule } from '@angular/common/http';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { HeaderModule } from './header/header.module';
import { AdsSectionModule } from './ads-section/ads-section.module';
import { HttpClientModule } from '@angular/common/http';
import { FeaturedestaurantsModule } from './featured-restaurants/featured-restaurants.module';

@NgModule({
  declarations: [AppComponent, HeroSectionComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientXsrfModule.withOptions({}),
    HeaderModule,
    AdsSectionModule,
    FeaturedestaurantsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
