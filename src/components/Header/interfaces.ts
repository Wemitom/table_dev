export interface SearchData {
  search: string;
  limit: number;
}

export interface AutoCompleteOption {
  name: string;
  path: string | null;
}

export interface SearchResponse {
  result: AutoCompleteOption[];
  size: number;
  limit: number;
}
