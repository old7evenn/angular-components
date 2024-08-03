import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Card } from '@/app/service/interfaces/card.interface';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchResultsSource = new BehaviorSubject<Card[]>([]);
  $searchResults = this.searchResultsSource.asObservable();

  updataSearchResults(searchResults: Card[]): void {
    this.searchResultsSource.next(searchResults);
  }

  search(query: string, originalResults: Card[]): void {
    if (!query) {
      this.updataSearchResults([...originalResults]);
      return
    }
    this.updataSearchResults(originalResults.filter((item) => item.snippet.title.toLowerCase().includes(query.toLowerCase())));
  }
}
