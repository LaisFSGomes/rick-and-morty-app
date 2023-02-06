import { Component, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'app/services/api.service';
import { EpisodeFilterType, pageEpisodeType } from 'app/_utils/templates';

@Component({
  selector: 'app-search-episodes',
  templateUrl: './search-episodes.component.html',
  styleUrls: ['./search-episodes.component.scss'],
})
export class SearchEpisodesComponent {
  typeSearch = 'normal';
  search: EpisodeFilterType = {
    name: '',
    season: '',
    episode: '',
  };
  @Output() response: EventEmitter<pageEpisodeType> =
    new EventEmitter<pageEpisodeType>();

  constructor(private service: ApiService) {}

  ngOnInit(): void {
    this.search.episode = '';
  }

  onClickTypeSearch() {
    this.search.name = '';
    this.search.episode = '';
  }
  onClickSearch() {
    const searchLabel = this.joinStringSearch();
    this.service.filterEpisodes(searchLabel).subscribe({
      next: (data) => {
        this.response.emit(data);
      },
      error: (error) => {
        this.response.emit({
          info: { count: 0, pages: 0, next: null, prev: null },
          results: [],
        });
      },
      complete: () => {},
    });
  }
  joinStringSearch = () => {
    let searchLabel = '';
    if (this.search.name !== '') {
      searchLabel = `name=${this.search.name}&`;
    }
    if (this.search.season !== '') {
      if (this.search.season.length === 1) {
        searchLabel += `episode=S0${this.search.season}`;
      } else {
        searchLabel += `episode=S${this.search.season}`;
      }
    } else {
      searchLabel += 'episode=';
    }
    if (this.search.episode !== '') {
      if (this.search.episode.length === 1) {
        searchLabel += `E0${this.search.episode}`;
      } else {
        searchLabel += `E${this.search.episode}`;
      }
    }
    return searchLabel;
  };
}
