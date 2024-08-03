import { Component, signal } from '@angular/core';
import { SearchItemComponent } from '../search-item/search-item.component';
import { Card } from '../../../service/interfaces/card.interface';
import { SearchService } from '../../service/search.youtube';
import { CommonModule } from '@angular/common';
import { YoutubeService } from '@app/service/youtube.service';

@Component({
  selector: 'app-search-results',
  imports: [SearchItemComponent, CommonModule],
  templateUrl: './search-results.component.html',
  standalone: true,
})
export class SearchResultsComponent {
  data = signal<Card[]>([]);

  constructor(
    private searchService: SearchService,
    private youtubeService: YoutubeService
  ) {
    this.loadVideos();
    this.searchService.$searchResults.subscribe((results) => {
      this.data.set(results);
    });
  }

  async loadVideos() {
    try {
      const videos = await this.youtubeService.getVideos();
      this.data.set(videos);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  }
}