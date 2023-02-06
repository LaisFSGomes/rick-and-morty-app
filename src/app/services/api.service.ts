import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  PageCharacterProps,
  CharacterType,
  pageLocationType,
  LocationType,
  pageEpisodeType,
  episodeType,
} from 'app/_utils/templates';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly API = 'https://rickandmortyapi.com/api/';

  constructor(private http: HttpClient) {}

  characterList(): Observable<PageCharacterProps> {
    return this.http.get<PageCharacterProps>(`${this.API}character/`);
  }
  characterPagination(page: number): Observable<PageCharacterProps> {
    return this.http.get<PageCharacterProps>(
      `${this.API}character/?page=${page}`
    );
  }
  filterCharacters(filter: string): Observable<PageCharacterProps> {
    return this.http.get<PageCharacterProps>(`${this.API}character/?${filter}`);
  }
  getCharacter(id: number): Observable<CharacterType> {
    return this.http.get<CharacterType>(`${this.API}character/${id}`);
  }

  locationsList(): Observable<pageLocationType> {
    return this.http.get<pageLocationType>(`${this.API}location/`);
  }
  locationsPagination(page: number): Observable<pageLocationType> {
    return this.http.get<pageLocationType>(`${this.API}location/?page=${page}`);
  }
  filterLocations(filter: string): Observable<pageLocationType> {
    return this.http.get<pageLocationType>(`${this.API}location/?${filter}`);
  }
  getLocation(id: number): Observable<LocationType> {
    return this.http.get<LocationType>(`${this.API}location/${id}`);
  }

  episodesList(): Observable<pageEpisodeType> {
    return this.http.get<pageEpisodeType>(`${this.API}episode/`);
  }
  episodesPagination(page: number): Observable<pageEpisodeType> {
    return this.http.get<pageEpisodeType>(`${this.API}episode/?page=${page}`);
  }
  filterEpisodes(filter: string): Observable<pageEpisodeType> {
    return this.http.get<pageEpisodeType>(`${this.API}episode/?${filter}`);
  }
  getEpisode(id: number): Observable<episodeType> {
    return this.http.get<episodeType>(`${this.API}episode/${id}`);
  }
}
