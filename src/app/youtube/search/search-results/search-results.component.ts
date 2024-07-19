import { Component } from '@angular/core';
import { SearchItemComponent } from '../search-item/search-item.component';
import dataRespanse from '../../../../data/response.json';
import { Card } from '../../../../data/interfaces/card.interface';
import { SearchService } from '../../service/search.youtube';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-results',
  imports: [SearchItemComponent, CommonModule],
  templateUrl: './search-results.component.html',
  standalone: true,
})
export class SearchResultsComponent {
  searchResult: Card[] = []
  data: Card[] = dataRespanse.items 
  constructor(private searchService: SearchService) {
    this.searchService.$searchResults.subscribe((results) => {
      this.searchResult = results;
      console.log(this.searchResult);
      
    })
  }
}