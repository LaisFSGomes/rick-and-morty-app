import { Component, Input } from '@angular/core';
import { LocationCardType } from 'app/_utils/templates';

@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html',
  styleUrls: ['./location-card.component.scss'],
})
export class LocationCardComponent {
  @Input() location: LocationCardType = {
    id: 0,
    name: '',
    type: '',
    dimension: '',
  };
}
