import { HomeComponent } from './home/home.component';
import { ModalEpisodeInfoComponent } from './episodes/modal-episode-info/modal-episode-info.component';
import { ModalLocationInfoComponent } from './locations/modal-location-info/modal-location-info.component';
import { LocationListComponent } from './locations/location-list/location-list.component';
import { ModalCharacterInfoComponent } from './characters/modal-character-info/modal-character-info.component';
import { CharacterListComponent } from 'app/characters/character-list/character-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodesListComponent } from './episodes/episodes-list/episodes-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'characters',
    component: CharacterListComponent,
  },
  {
    path: 'characters/info/:id',
    component: ModalCharacterInfoComponent,
  },
  {
    path: 'locations',
    component: LocationListComponent,
  },
  {
    path: 'locations/info/:id',
    component: ModalLocationInfoComponent,
  },
  {
    path: 'episodes',
    component: EpisodesListComponent,
  }, {
    path: 'episodes/info/:id',
    component: ModalEpisodeInfoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
