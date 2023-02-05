export interface CharacterType {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};
export interface CharacterCardType {
  id: number;
  image: string;
  name: string;
  species: string;
  status: string;
}
export interface InfoPageProps {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
};
export interface PageCharacterProps {
  info: InfoPageProps;
  results: CharacterType[];
}
export interface CharacterFilterProps {
  name: string;
  status: "alive" | "dead" | "unknown" | "";
  species: string;
  type: string;
  gender: "female" | "male" | "genderless" | "unknown" | "";
}
export interface LocationType {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}
export interface pageLocationType {
  info: InfoPageProps;
  results: LocationType[];
}
export interface LocationCardType {
  id: number;
  name: string;
  type: string;
  dimension: string;
}
export interface LocationFilterType {
  name: string;
  type: string;
  dimension: string;
}

export interface episodeType {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}
export interface pageEpisodeType {
  info: InfoPageProps;
  results: episodeType[];
}
export interface paginationType {
  currentPage: number;
  totalPages: number;
};


export interface SearchType {
  type: "character" | "location" | "episode" | "";
  //pro tipo character
  nameCharacter?: string;
  statusCharacter?: "alive" | "dead" | "unknown" | "";
  speciesCharacter?: string;
  typeCharacter?: string;
  genderCharacter?: "female" | "male" | "genderless" | "unknown" | "";
  //pro tipo location
  nameLocation?: string;
  typeLocation?: string;
  dimensionLocation?: string;
  //pro tipo episode
  nameEpisode?: string;
  episode?: string;
}
