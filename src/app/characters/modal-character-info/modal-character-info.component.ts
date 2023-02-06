import { CharacterType, episodeType } from 'app/_utils/templates';
import { ApiService } from 'app/services/api.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modal-character-info',
  templateUrl: './modal-character-info.component.html',
  styleUrls: ['./modal-character-info.component.scss'],
})
export class ModalCharacterInfoComponent {
  character: CharacterType = {
    id: 0,
    name: '',
    status: '',
    species: '',
    type: '',
    gender: '',
    origin: {
      name: '',
      url: '',
    },
    location: {
      name: '',
      url: '',
    },
    image: '',
    episode: [],
    url: '',
    created: '',
  } as CharacterType;
  episodes: episodeType[] = [];
  hideButtonScroll: string = '';

  constructor(
    private service: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getCharacter(id).subscribe({
      next: (data) => {
        this.character = data;
      },
      complete: () => {
        this.getAllEpisodes();
      },
    });
  }
  onBackButtonClick(): void {
    window.history.back();
  }
  getAllEpisodes(): void {
    for (let episode of this.character.episode) {
      let getId = episode.split('/');
      let id = getId[getId.length - 1];
      this.service.getEpisode(Number(id)).subscribe({
        next: (data) => {
          this.episodes.push(data);
        },
        complete: () => {
          this.hideButtonScroll = this.episodes.length > 4 ? '' : 'hide';
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
