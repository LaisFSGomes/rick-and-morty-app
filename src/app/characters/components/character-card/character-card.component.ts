import { Component, Input } from '@angular/core';
import { CharacterCardType } from 'app/_utils/templates';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss'],
})
export class CharacterCardComponent {
  @Input() character: CharacterCardType = {
    id: 0,
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    name: 'Rick Sanchez',
    species: 'Human',
    status: 'Alive',
  };
  maxNameLenght(name: string) {
    return name.length > 15 ? name.slice(0, 15) + '...' : name;
  }
}
