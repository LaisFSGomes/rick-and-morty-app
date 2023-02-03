import { CharacterType } from './../../_utils/templates';
import { ApiService } from './../../services/api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent {
  searchCharacterName: string = '';
  currentChacactersPage: CharacterType[] = [];
  totalPages: number = 0;
  currentPage: number = 0;
  constructor (private service: ApiService) { }


  ngOnInit(): void {
    this.service.listar().subscribe((data) => {
      this.currentChacactersPage = data.results;
      this.totalPages = data.info.pages;
      this.currentPage = 1;
    });
  }
  onClickSearch() {
    this.service.filterCharacters(`name=${this.searchCharacterName}`).subscribe((data) => {
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
}
