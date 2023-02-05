import { ModalLocationInfoComponent } from './locations/modal-location-info/modal-location-info.component';
import { LocationListComponent } from './locations/location-list/location-list.component';
import { ModalCharacterInfoComponent } from './characters/modal-character-info/modal-character-info.component';
import { CharacterListComponent } from 'app/characters/character-list/character-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'characters',
    pathMatch: 'full',
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
