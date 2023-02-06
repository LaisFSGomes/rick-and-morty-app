import { CharacterType } from 'app/_utils/templates';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'app/services/api.service';
import { episodeType } from './../../_utils/templates';
import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-episode-info',
  templateUrl: './modal-episode-info.component.html',
  styleUrls: ['./modal-episode-info.component.scss'],
})
export class ModalEpisodeInfoComponent {
  episode: episodeType = {
    id: 0,
    name: '',
    air_date: '',
    episode: '',
    characters: [],
    url: '',
    created: '',
  };
  characters: CharacterType[] = [];
  hideButtonScroll: string = '';

  constructor(
    private service: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getEpisode(Number(id)).subscribe({
      next: (data) => {
        this.episode = data;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        this.getAllCharacters();
      },
    });
  }
  onBackButtonClick(): void {
    window.history.back();
  }
  getAllCharacters(): void {
    for (let character of this.episode.characters) {
      let getId = character.split('/');
      let id = getId[getId.length - 1];
      this.service.getCharacter(Number(id)).subscribe({
        next: (data) => {
          this.characters.push(data);
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          this.hideButtonScroll = this.characters.length > 4 ? '' : 'hide';
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
      console.log(element.scrollLeft, element.scrollWidth);
      if (element.scrollLeft >= element.scrollWidth - element.scrollLeft / 2) {
        element.scrollLeft = 0;
      }
    }
  }
}
