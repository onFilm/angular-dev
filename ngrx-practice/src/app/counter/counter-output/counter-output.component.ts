import { Component, Input } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-counter-output',
  standalone: true,
  imports: [CounterComponent],
  templateUrl: './counter-output.component.html',
  styleUrl: './counter-output.component.css'
})
export class CounterOutputComponent {
  @Input() count: number | null = 0;
}
