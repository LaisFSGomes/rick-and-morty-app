import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PageCharacterProps, CharacterType } from '../_utils/templates';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly API = 'https://rickandmortyapi.com/api/character/';

  constructor(private http: HttpClient) { }

  listar(): Observable<PageCharacterProps> {
    return this.http.get<PageCharacterProps>(this.API);
  }
  listarPaginacao (page: number): Observable<PageCharacterProps> {
    return this.http.get<PageCharacterProps>(`${this.API}?page=${page}`);
  }
  filterCharacters (filter: string): Observable<PageCharacterProps> {
    return this.http.get<PageCharacterProps>(`${this.API}?${filter}`);
  }
  getCharacter (id: number): Observable<CharacterType> {
    return this.http.get<CharacterType>(`${this.API}${id}`);
  }
}
