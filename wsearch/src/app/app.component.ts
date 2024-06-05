import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageListsComponent } from "./page-lists/page-lists.component";
import { SearchBarComponent } from "./search-bar/search-bar.component";
import { WikipediaService } from './services/wikipedia.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, PageListsComponent, SearchBarComponent]
})
export class AppComponent {
  pages = [];
  constructor(private wikipediaService: WikipediaService) {

  }

  onSearchTerm(term: string) {
    this.wikipediaService.wikipediaSearch(term).subscribe((response: any) => {
      this.pages = response.query.search;
    });
  }
}
