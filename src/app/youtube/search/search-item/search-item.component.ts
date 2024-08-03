import { Component, Input } from '@angular/core';
import { Card } from '@/app/service/interfaces/card.interface';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { StatisticsComponent } from '@app/youtube/statistics/statistics.component';
import { CardBorderComponent } from "../../card-border/card-border.component";

@Component({
  selector: 'app-search-item',
  standalone: true,
  imports: [CommonModule, StatisticsComponent, CardBorderComponent],
  templateUrl: './search-item.component.html',
})
export class SearchItemComponent {
  @Input() card?: Card;

  constructor (private router: Router) {}

  goToDetail(card: Card) {
    this.router.navigate(['/detail', card.id]);
  }

  handleKeydown(event: KeyboardEvent, card: Card) {
  if (event.key === 'Enter' || event.key === ' ') {
    this.goToDetail(card);
  }
}
}
