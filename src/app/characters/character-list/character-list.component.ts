import { Component } from '@angular/core';
import { ApiService } from 'app/services/api.service';
import {
  CharacterType,
  PageCharacterType,
  paginationType,
} from 'app/_utils/templates';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss'],
})
export class CharacterListComponent {
  currentChacactersPage: CharacterType[] = [];
  data: PageCharacterType = {
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
    this.service.characterList().subscribe({
      next: (data) => {
        this.getData(data);
      },
      complete: () => {
        this.currentChacactersPage = this.data.results;
        this.pagination.currentPage = 1;
        this.pagination.totalPages = this.data.info.pages;
      }
    })

  }

  onClickPreviousPage() {
    this.service
      .characterPagination(this.pagination.currentPage - 1)
      .subscribe((data) => {
        this.currentChacactersPage = data.results;
        this.pagination.currentPage = this.pagination.currentPage - 1;
      });
  }
  onClickNextPage() {
    this.service
      .characterPagination(this.pagination.currentPage + 1)
      .subscribe((data) => {
        this.currentChacactersPage = data.results;
        this.pagination.currentPage = this.pagination.currentPage + 1;
      });
  }
  onClickFirstPage() {
    this.service.characterPagination(1).subscribe((data) => {
      this.currentChacactersPage = data.results;
      this.pagination.currentPage = 1;
    });
  }
  onClickLastPage() {
    this.service
      .characterPagination(this.pagination.totalPages)
      .subscribe((data) => {
        this.currentChacactersPage = data.results;
        this.pagination.currentPage = this.pagination.totalPages;
      });
  }
  getData(data: PageCharacterType) {
    this.data = data;
    this.currentChacactersPage = data.results;
    this.pagination.totalPages = data.info.pages;
    this.pagination.currentPage = 1;
  }
}
