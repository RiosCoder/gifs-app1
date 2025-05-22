import { Component, inject } from '@angular/core';
import { GifListComponent } from "../../components/gif-list/gif-list.component";
import { GifServiceService } from 'src/app/services/gif-service.service';

@Component({
  selector: 'app-search',
  imports: [GifListComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export default class SearchComponent {
  gifService = inject(GifServiceService)
  onSearch(query: string) {
    this.gifService.searchGifs(query);
    console.log({ query });
  }
}
