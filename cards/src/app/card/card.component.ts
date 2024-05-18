import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardsComponent {
  @Input() title: string = "";
  @Input() imageUrl: string = "";
  @Input() userName: string = "";
  @Input() description: string = "";
}
