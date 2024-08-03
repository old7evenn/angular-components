import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card } from '@app/service/interfaces/card.interface';
import { YoutubeService } from '@app/service/youtube.service';
import { StatisticsComponent } from '../youtube/statistics/statistics.component';
import { CardBorderComponent } from '../youtube/card-border/card-border.component';

@Component({
  selector: 'app-detailed-information',
  standalone: true,
  imports: [CommonModule, StatisticsComponent, CardBorderComponent],
  templateUrl: './detailed.component.html',
})
export class DetailedComponent implements OnInit {
  cardId = '';
  public card = signal<Card | null>(null); 

  constructor(
    private route: ActivatedRoute,
    private youtubeService: YoutubeService
  ) {}

  ngOnInit(): void {
    this.cardId = this.route.snapshot.paramMap.get('id') || '';
    this.youtubeService
      .getDetailsVideo(this.cardId)
      .then((data: Card) => this.card.set(data))
      .catch((error) => console.error('Error fetching video:', error));
  }
}
