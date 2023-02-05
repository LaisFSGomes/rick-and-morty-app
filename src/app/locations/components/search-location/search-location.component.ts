import { Component, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'app/services/api.service';
import { LocationFilterType, pageLocationType } from 'app/_utils/templates';

@Component({
  selector: 'app-search-location',
  templateUrl: './search-location.component.html',
  styleUrls: ['./search-location.component.scss']
})
export class SearchLocationComponent {
  typeSearch: string = 'normal';
  search: LocationFilterType = {
    name: '',
    type: '',
    dimension: '',
  };
  @Output() response: EventEmitter<pageLocationType> = new EventEmitter<pageLocationType>();

  constructor(private service: ApiService) { }

  onClickTypeSearch() {
    this.search.name = '';
    this.search.type = '';
    this.search.dimension = '';
  }

  onClickSearch() {
    const searchLabel = this.joinStringSearch();
    this.service.filterLocations(searchLabel).subscribe({
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
    if (this.search.type !== '') searchLabel += `type=${this.search.type}&`;
    if (this.search.dimension !== '')
      searchLabel += `dimension=${this.search.dimension}&`;
    return searchLabel;
  };
}
