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
import { EpisodesListComponent } from './episodes/episodes-list/episodes-list.component';
import { EpisodesCardComponent } from './episodes/components/episodes-card/episodes-card.component';
import { SearchEpisodesComponent } from './episodes/components/search-episodes/search-episodes.component';
import { ModalEpisodeInfoComponent } from './episodes/modal-episode-info/modal-episode-info.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ThereAreNoItensComponent } from './components/there-are-no-itens/there-are-no-itens.component';

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
    EpisodesListComponent,
    EpisodesCardComponent,
    SearchEpisodesComponent,
    ModalEpisodeInfoComponent,
    HomeComponent,
    FooterComponent,
    ThereAreNoItensComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
