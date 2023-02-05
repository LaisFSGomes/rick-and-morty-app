import { Observable } from 'rxjs';
import { CharacterType } from 'app/_utils/templates';
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
      error: (err) => {
        console.log(err);
      },
    });
  }
  onBackButtonClick(): void {
    this.router.navigate(['/characters']);
  }
}
