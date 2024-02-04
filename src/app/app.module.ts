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
import { ExploreRestaurantsSectionModule } from './explore-restaurants-section/explore-restaurants-section.module';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [AppComponent, HeroSectionComponent, FooterComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientXsrfModule.withOptions({}),
    HeaderModule,
    AdsSectionModule,
    FeaturedestaurantsModule,
    ExploreRestaurantsSectionModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
