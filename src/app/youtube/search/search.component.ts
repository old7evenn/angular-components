import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import dataResponse from '@/data/response.json';
import { Card } from '@/data/interfaces/card.interface';
import { SearchService } from '../service/search.youtube';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './search.component.html',
})
export class SearchComponent {
  searchResults: Card[] = [];
  originalResults: Card[] = [];
  searchQuery: string = '';

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    this.loadMockedData();
  }

  loadMockedData(): void {
    this.originalResults = dataResponse.items;
    this.searchResults = [...this.originalResults];
  }

  search(): void {
    this.searchResults = this.originalResults.filter((item) =>
      item.snippet.title
        .toLocaleLowerCase()
        .includes(this.searchQuery.toLowerCase())
    );
    this.searchService.updataSearchResults(this.searchResults)
  }
}
