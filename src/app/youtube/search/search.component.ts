import { Component, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Card } from '@/app/service/interfaces/card.interface';
import { SearchService } from '../service/search.youtube';
import { YoutubeService } from '@app/service/youtube.service';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './search.component.html',
})
export class SearchComponent {
  searchResults = signal<Card[]>([]);
  originalResults = signal<Card[]>([]);
  searchQuery = '';
  private searchSubject = new Subject<string>();

  constructor(
    private searchService: SearchService,
    private youtubeService: YoutubeService
  ) {}

  ngOnInit() {
    this.loadMockedData();
    this.searchSubject.pipe(debounceTime(1000)).subscribe((query) => {
      this.searchService.search(query, this.originalResults());
    });

    this.searchService.$searchResults.subscribe((results) => {
      this.searchResults.set(results)
    });
  }

  async loadMockedData() {
    try {
      const data = await this.youtubeService.getVideos();
      this.originalResults.set(data);
      this.searchResults.set([...data]);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  }

  onSearchQueryChange(query: string) {
    this.searchSubject.next(query);
  }
}
