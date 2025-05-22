import { GifServiceService } from 'src/app/services/gif-service.service';
import { GiphyResponse } from './../../../iterfaces/giphy.interfaces';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-search-page',
  imports: [],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css'
})
export class SearchPageComponent {

  gifService = inject(GifServiceService);

  onSearch(query: string) {
    this.gifService.searchGifs(query)
  }
}
