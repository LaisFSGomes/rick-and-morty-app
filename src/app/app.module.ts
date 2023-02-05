import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from 'app/app-routing.module';
import { AppComponent } from 'app/app.component';
import { CharacterListComponent } from 'app/characters/character-list/character-list.component';
import { CharacterCardComponent } from 'app/characters/components/character-card/character-card.component';
import { HeaderComponent } from 'app/components/header/header.component';
import { ModalCharacterInfoComponent } from './characters/modal-character-info/modal-character-info.component';
import { LocationListComponent } from './locations/location-list/location-list.component';
import { LocationCardComponent } from './locations/components/location-card/location-card.component';
import { SearchComponent } from './characters/components/search/search.component';
import { SearchLocationComponent } from './locations/components/search-location/search-location.component';
import { ModalLocationInfoComponent } from './locations/modal-location-info/modal-location-info.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterListComponent,
    CharacterCardComponent,
    HeaderComponent,
    ModalCharacterInfoComponent,
    LocationListComponent,
    LocationCardComponent,
    SearchComponent,
    SearchLocationComponent,
    ModalLocationInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
