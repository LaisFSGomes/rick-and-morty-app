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
  constructor (private service: ApiService) { }


  ngOnInit(): void {
    this.service.listar().subscribe((data) => {
      this.currentChacactersPage = data.results;
    });
  }
  onClickSearch() {
    this.service.filterCharacters(`name=${this.searchCharacterName}`).subscribe((data) => {
      this.currentChacactersPage = data.results;
    });
  }
}
