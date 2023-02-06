import { LocationType, CharacterType } from 'app/_utils/templates';
import { ApiService } from 'app/services/api.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modal-location-info',
  templateUrl: './modal-location-info.component.html',
  styleUrls: ['./modal-location-info.component.scss'],
})
export class ModalLocationInfoComponent {
  location: LocationType = {
    id: 0,
    name: '',
    type: '',
    dimension: '',
    residents: [],
    url: '',
    created: '',
  };
  residents: CharacterType[] = [];
  hideButtonScroll: string = '';

  constructor(
    private service: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getLocation(Number(id)).subscribe({
      next: (data) => {
        this.location = data;
      },
      complete: () => {
        this.getAllResidents();
      },
    });
  }
  onBackButtonClick(): void {
    window.history.back();
  }
  getAllResidents(): void {
    for (let resident of this.location.residents) {
      let getId = resident.split('/');
      let id = getId[getId.length - 1];
      this.service.getCharacter(Number(id)).subscribe({
        next: (data) => {
          this.residents.push(data);
        },
        complete: () => {
          this.hideButtonScroll = this.residents.length > 4 ? '' : 'hide';
        },
      });
    }
  }
  scrollLeft(): void {
    let element = document.getElementById('carrousel');
    if (element) {
      element.scrollLeft -= 600;
      if (element.scrollLeft <= 0) {
        element.scrollLeft = element.scrollWidth;
      }
    }
  }
  scrollRight(): void {
    let element = document.getElementById('carrousel');
    if (element) {
      element.scrollLeft += 600;
      if (element.scrollLeft >= element.scrollWidth - element.scrollLeft / 2) {
        element.scrollLeft = 0;
      }
    }
  }
}
