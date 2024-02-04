import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

interface CusinineType {
  id: number;
  name: string;
  service_provider_types: [
    {
      id: number;
      service_provider: number;
    }
  ];
}

interface Venue {
  id: number;
  name: string;
  address: string;
  Xaxis: number;
  Yaxis: number;
  logo: { formats: { thumbnail: { url: string } } };
  services: { service_provider: number };
  online: boolean;
}

@Component({
  selector: 'app-explore-restaurants-section',
  templateUrl: './explore-restaurants-section.component.html',
  styleUrls: ['./explore-restaurants-section.component.scss'],
})
export class ExploreRestaurantsSectionComponent implements OnInit, OnDestroy {
  cusisineTypeList: CusinineType[] = [];
  subs = new Subscription();
  cuisineFilter: number = 0;
  restaurantsList: Venue[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getCusinineTypes();
    this.getVenues();
  }

  getCusinineTypes() {
    let sub1$ = this.http
      .get<CusinineType[]>(
        'https://api.upick.ae/cuisine-types?service_provider_types_nin=[]'
      )
      .subscribe((res) => {
        this.cusisineTypeList = res;
      });
    this.subs.add(sub1$);
  }

  filterCuisine(cuisineId: number) {
    this.cuisineFilter = cuisineId;
    // cusisine api doesn't filter when sending query parameters
  }

  getVenues() {
    let sub2$ = this.http
      .get<Venue[]>('http://api.upick.ae/service-providers')
      .subscribe((res) => {
        this.restaurantsList = res;
        console.log(res);
      });

    this.subs.add(sub2$);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
