import { Component } from '@angular/core';
import { ApiService } from 'app/services/api.service';
import {
  CharacterType,
  CharacterFilterProps,
  PageCharacterProps,
} from 'app/_utils/templates';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss'],
})
export class CharacterListComponent {
  currentChacactersPage: CharacterType[] = [];
  data: PageCharacterProps = {
    info: {
      count: 0,
      pages: 0,
      next: null,
      prev: null,
    },
    results: [],
  };
  totalPages: number = 0;
  currentPage: number = 0;
  typeSearch: string = 'normal';
  search: CharacterFilterProps = {
    name: '',
    status: '',
    species: '',
    type: '',
    gender: '',
  };
  constructor(private service: ApiService) {}

  getData(data: PageCharacterProps) {
    this.data = data;
    this.currentChacactersPage = data.results;
    this.totalPages = data.info.pages;
    this.currentPage = 1;
  }

  ngOnInit(): void {
    this.service.listar().subscribe((data) => {
      this.currentChacactersPage = data.results;
      this.totalPages = data.info.pages;
      this.currentPage = 1;
    });
  }

  onClickPreviousPage() {
    this.service.listarPaginacao(this.currentPage - 1).subscribe((data) => {
      this.currentChacactersPage = data.results;
      this.currentPage = this.currentPage - 1;
    });
  }
  onClickNextPage() {
    this.service.listarPaginacao(this.currentPage + 1).subscribe((data) => {
      this.currentChacactersPage = data.results;
      this.currentPage = this.currentPage + 1;
    });
  }
  onClickFirstPage() {
    this.service.listarPaginacao(1).subscribe((data) => {
      this.currentChacactersPage = data.results;
      this.currentPage = 1;
    });
  }
  onClickLastPage() {
    this.service.listarPaginacao(this.totalPages).subscribe((data) => {
      this.currentChacactersPage = data.results;
      this.currentPage = this.totalPages;
    });
  }

  joinStringSearch = (search: CharacterFilterProps) => {
    let searchLabel: string = '';
    if (this.search.name !== '') searchLabel += `name=${this.search.name}&`;
    if (this.search.status !== 'unknown')
      searchLabel += `status=${this.search.status}&`;
    if (this.search.species !== '')
      searchLabel += `species=${this.search.species}&`;
    if (this.search.type !== '') searchLabel += `type=${this.search.type}&`;
    return searchLabel;
  };
}
