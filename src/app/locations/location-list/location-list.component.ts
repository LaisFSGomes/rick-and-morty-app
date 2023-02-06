import { ApiService } from 'app/services/api.service';
import { Component } from '@angular/core';
import {
  LocationType,
  pageLocationType,
  paginationType,
} from 'app/_utils/templates';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss'],
})
export class LocationListComponent {
  currentLocationPage: LocationType[] = [];
  data: pageLocationType = {
    info: {
      count: 0,
      pages: 0,
      next: null,
      prev: null,
    },
    results: [],
  };
  pagination: paginationType = {
    currentPage: 0,
    totalPages: 0,
  };

  constructor(private service: ApiService) {}

  ngOnInit(): void {
    this.service.locationsList().subscribe({
      next: (data) => {
        this.data = data;
      },
      complete: () => {
        this.currentLocationPage = this.data.results;
        this.pagination.currentPage = 1;
        this.pagination.totalPages = this.data.info.pages;
      },
    });
  }

  onClickPreviousPage() {
    this.service
      .locationsPagination(this.pagination.currentPage - 1)
      .subscribe({
        next: (data) => {
          this.data = data;
        },
        complete: () => {
          this.currentLocationPage = this.data.results;
          this.pagination.currentPage = this.pagination.currentPage - 1;
        },
      });
  }
  onClickNextPage() {
    this.service
      .locationsPagination(this.pagination.currentPage + 1)
      .subscribe({
        next: (data) => {
          this.data = data;
        },
        complete: () => {
          this.currentLocationPage = this.data.results;
          this.pagination.currentPage = this.pagination.currentPage + 1;
        },
      });
  }
  onClickFirstPage() {
    this.service.locationsPagination(1).subscribe({
      next: (data) => {
        this.data = data;
      },
      complete: () => {
        this.currentLocationPage = this.data.results;
        this.pagination.currentPage = 1;
      },
    });
  }
  onClickLastPage() {
    this.service.locationsPagination(this.pagination.totalPages).subscribe({
      next: (data) => {
        this.data = data;
      },
      complete: () => {
        this.currentLocationPage = this.data.results;
        this.pagination.currentPage = this.pagination.totalPages;
      },
    });
  }
  getData(data: pageLocationType) {
    this.data = data;
    this.currentLocationPage = data.results;
    this.pagination.totalPages = data.info.pages;
    this.pagination.currentPage = 1;
  }
}
