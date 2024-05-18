import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardsComponent } from './card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CardsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      imageUrl: '../assets/tree.jpeg',
      userName: 'nature',
      description: "Saw this neat tree during the hike today."
    },
    {
      title: 'Snowy mountain',
      imageUrl: '../assets/mountain.jpeg',
      userName: 'mountain',
      description: "Here is the picture of snowy mountain."
    },
    {
      title: 'Biking',
      imageUrl: '../assets/biking.jpeg',
      userName: 'biker',
      description: "I did biking today."
    },
  ];
}
