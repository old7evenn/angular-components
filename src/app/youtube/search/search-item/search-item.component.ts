import { Component, Input } from '@angular/core';
import { Card } from '@/data/interfaces/card.interface';
import { CommonModule } from '@angular/common';
import { ShortenNumberPipe } from './pipes/shorten-number.pipe';

@Component({
  selector: 'app-search-item',
  standalone: true,
  imports: [CommonModule, ShortenNumberPipe],
  templateUrl: './search-item.component.html',
})
export class SearchItemComponent {
  @Input() card?: Card;

  getBorderColor(publicationDate: string): string {
    const date = new Date(publicationDate);
    const now = new Date();
    const diffInDays = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 3600 * 24)
    );

    console.log(diffInDays);

    if (diffInDays > 180) {
      return 'red';
    } else if (diffInDays > 30) {
      return 'yellow';
    } else if (diffInDays > 7) {
      return 'green';
    } else {
      return 'blue';
    }
  }
}
