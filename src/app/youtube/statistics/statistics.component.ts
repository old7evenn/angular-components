import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ShortenNumberPipe } from '@app/youtube/pipes/shorten-number.pipe';
import { Card } from '@app/service/interfaces/card.interface';

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [CommonModule, ShortenNumberPipe],
  templateUrl: './statistics.component.html',
})
export class StatisticsComponent {
  @Input() card?: Card | null
}
