import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-page-lists',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-lists.component.html',
  styleUrl: './page-lists.component.css',
  encapsulation: ViewEncapsulation.Emulated
})
export class PageListsComponent {
  @Input() pages: any[] = [];

  constructor() {}

}
