import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
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
  searchRestaurantForm: FormGroup = new FormGroup({
    restauantName: new FormControl(''),
  });
  isloading = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getCusinineTypes();
    this.getVenues();
    this.searchRestauantByName();
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
    this.isloading = true;
    //cannot implement pagination on scroll since there is
    // no query parameter for page number provided in the API
    let sub2$ = this.http
      .get<Venue[]>('http://api.upick.ae/service-providers')
      .subscribe((res) => {
        this.restaurantsList = res;
        this.restaurantsList = this.restaurantsList.slice(0, 20); //since items after the 20th don't have logos
        this.isloading = false;
      });

    this.subs.add(sub2$);
  }

  searchRestauantByName() {
    this.isloading = true;
    let sub3$ = this.searchRestaurantForm.valueChanges
      .pipe(debounceTime(1000)) // wait until user finishes typing
      .subscribe((res) => {
        // commented out because API isn't complete to search only by name
        const name = res.restaurantName;
        // let sub4$ = this.http
        //   .get<Venue[]>(
        //     `http://api.upick.ae/service-providers/1/search?name_contains=${name}`
        //   )
        //   .subscribe((res) => {
        //     this.restaurantsList = res;
        //     this.isloading = false;
        //   });
        // this.subs.add(sub4$);
      });
    this.subs.add(sub3$);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
