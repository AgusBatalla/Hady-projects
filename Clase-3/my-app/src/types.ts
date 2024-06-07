export interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Genre?: string; // Añadido el tipo Genre
  Director?: string;
  Plot?: string;
  Poster?: string;
}
