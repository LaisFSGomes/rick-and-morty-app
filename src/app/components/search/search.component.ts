import { ApiService } from 'app/services/api.service';
import { CharacterFilterProps, PageCharacterProps } from './../../_utils/templates';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  typeSearch: string = 'normal';
  search: CharacterFilterProps = {
    name: '',
    status: '',
    species: '',
    type: '',
    gender: '',
  };
  @Output() response: EventEmitter<PageCharacterProps> =
    new EventEmitter<PageCharacterProps>();

  constructor(private service: ApiService) {}

  onClickTypeSearch() {
    this.search.name = '';
    this.search.status = '';
    this.search.species = '';
    this.search.type = '';
  }

  onClickSearch() {
    const searchLabel = this.joinStringSearch();
    this.service.filterCharacters(searchLabel).subscribe({
      next: (data) => {
        this.response.emit(data);
      },
      error: (error) => {
        this.response.emit({
          info: { count: 0, pages: 0, next: null, prev: null },
          results: [],
        });
      },
    });
  }

  joinStringSearch = () => {
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
