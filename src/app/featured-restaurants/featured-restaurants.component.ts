import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

interface featuredRestaurant {
  id: number;
  name: string;
  image: [{ id: number; url: string }];
}

@Component({
  selector: 'app-featured-restaurants',
  templateUrl: './featured-restaurants.component.html',
  styleUrls: ['./featured-restaurants.component.scss'],
})
export class FeaturedRestaurantsComponent implements OnInit, OnDestroy {
  featuredList: featuredRestaurant[] = [];
  subs = new Subscription();

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getFeaturedList();
  }

  getFeaturedList() {
    let sub1$ = this.http
      .get<featuredRestaurant[]>('https://api.upick.ae/categories/2/featured')
      .subscribe((res) => {
        this.featuredList = res;
      });
    this.subs.add(sub1$);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
