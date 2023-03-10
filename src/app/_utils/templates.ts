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
export interface InfoPageType {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
};
export interface PageCharacterType {
  info: InfoPageType;
  results: CharacterType[];
}
export interface CharacterFilterType {
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
  info: InfoPageType;
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
  info: InfoPageType;
  results: episodeType[];
}

export interface episodeCardType {
  id: number;
  name: string;
  air_date: string;
  episode: string;
}
export interface EpisodeFilterType {
  name: string;
  season: string;
  episode: string;
}

export interface paginationType {
  currentPage: number;
  totalPages: number;
};
