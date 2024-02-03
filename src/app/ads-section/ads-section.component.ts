import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

interface Photo {
  id: number;
  photoURL: string;
}

@Component({
  selector: 'app-ads-section',
  templateUrl: './ads-section.component.html',
  styleUrls: ['./ads-section.component.scss'],
})
export class AdsSectionComponent implements OnInit, OnDestroy {
  subs = new Subscription();
  photosList: Photo[] = [];
  isDragging = false;
  startPosition = 0;
  currentTranslate = 0;
  prevTranslate = 0;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getPictures();
  }

  getPictures() {
    let sub1$ = this.http
      .get<Photo[]>('assets/venues/venues.json')
      .subscribe((res) => {
        this.photosList = res;
      });
    this.subs.add(sub1$);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
