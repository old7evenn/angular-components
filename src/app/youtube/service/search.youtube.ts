import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Card } from '@/data/interfaces/card.interface';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchResultsSource = new BehaviorSubject<Card[]>([]);
  $searchResults = this.searchResultsSource.asObservable();

  updataSearchResults(searchResults: Card[]): void {
    this.searchResultsSource.next(searchResults);
  }
}
