export class Results {
}

import { SearchEntry } from './entry.model';
export interface SearchResults {
  resultCount: number;
  results: SearchEntry[];
}
