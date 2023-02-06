import { Component, Input } from '@angular/core';
import { episodeCardType } from 'app/_utils/templates';

@Component({
  selector: 'app-episodes-card',
  templateUrl: './episodes-card.component.html',
  styleUrls: ['./episodes-card.component.scss'],
})
export class EpisodesCardComponent {
  @Input() episode: episodeCardType = {
    id: 0,
    name: '',
    air_date: '',
    episode: '',
  };
}
