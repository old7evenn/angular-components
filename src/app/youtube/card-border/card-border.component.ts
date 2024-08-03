import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Card } from '@app/service/interfaces/card.interface';

@Component({
  selector: 'app-card-border',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-border.component.html',
})
export class CardBorderComponent {
  @Input() card?: Card | null

  getBorderColor(publicationDate: string): string {
    const date = new Date(publicationDate);
    const now = new Date();
    const diffInDays = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 3600 * 24)
    );
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
