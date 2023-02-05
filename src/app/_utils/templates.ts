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

