import { pageEpisodeType, paginationType } from 'app/_utils/templates';
import { Component } from '@angular/core';
import { ApiService } from 'app/services/api.service';
import { episodeType } from 'app/_utils/templates';

@Component({
  selector: 'app-episodes-list',
  templateUrl: './episodes-list.component.html',
  styleUrls: ['./episodes-list.component.scss'],
})
export class EpisodesListComponent {
  currentEpisodesPage: episodeType[] = [];
  data: pageEpisodeType = {
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
    this.service.episodesList().subscribe({
      next: (data) => {
        this.data = data;
      },
      complete: () => {
        this.currentEpisodesPage = this.data.results;
        this.pagination.currentPage = 1;
        this.pagination.totalPages = this.data.info.pages;
      },
    });
  }

  onClickPreviousPage() {
    this.service.episodesPagination(this.pagination.currentPage - 1).subscribe({
      next: (data) => {
        this.data = data;
      },
      complete: () => {
        this.currentEpisodesPage = this.data.results;
        this.pagination.currentPage = this.pagination.currentPage - 1;
      },
    });
  }
  onClickNextPage() {
    this.service.episodesPagination(this.pagination.currentPage + 1).subscribe({
      next: (data) => {
        this.data = data;
      },
      complete: () => {
        this.currentEpisodesPage = this.data.results;
        this.pagination.currentPage = this.pagination.currentPage + 1;
      },
    });
  }
  onClickFirstPage() {
    this.service.episodesPagination(1).subscribe({
      next: (data) => {
        this.data = data;
      },
      complete: () => {
        this.currentEpisodesPage = this.data.results;
        this.pagination.currentPage = 1;
      },
    });
  }
  onClickLastPage() {
    this.service.episodesPagination(this.pagination.totalPages).subscribe({
      next: (data) => {
        this.data = data;
      },
      complete: () => {
        this.currentEpisodesPage = this.data.results;
        this.pagination.currentPage = this.pagination.totalPages;
      },
    });
  }
  getData(data: pageEpisodeType) {
    this.data = data;
    this.currentEpisodesPage = this.data.results;
    this.pagination.totalPages = this.data.info.pages;
  }
}
