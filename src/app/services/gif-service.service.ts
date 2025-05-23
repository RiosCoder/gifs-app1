import { HttpClient } from '@angular/common/http';
import { inject, Inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import type { GiphyResponse } from '../iterfaces/giphy.interfaces';
import { Gif } from '../iterfaces/gif.interface';
import { GifMapper } from '../gifs/mapper/gif.mapper';

@Injectable({
  providedIn: 'root'
})
export class GifServiceService {
  private http = inject(HttpClient);
  trendingGifs = signal<Gif[]>([]);
  trendingGifLoading = signal(true);

  constructor() {
    this.loadTrendingGifs();
  }

  UrlCC = environment.giphyUrl;
  loadTrendingGifs() {
    this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`, {
      params: {
        api_key: environment.giphyApikey,
        limit: 20,
      },
    })
      .subscribe((response) => {
        const gifs = GifMapper.mapGiphyItemsToGifs(response.data);
        this.trendingGifs.set(gifs);
        this.trendingGifLoading.set(false);
        // Log the gifs to the console
        console.log(gifs);


      });
  }

  searchGifs(query: string): void {
    console.log("Url: " + this.UrlCC + "/gifs/search");

    this.http.get<GiphyResponse>(this.UrlCC + "/gifs/search", {
      params: {
        api_key: environment.giphyApikey,
        limit: 20,
        q: query,
      }
    }).subscribe((response) => {
      const gifs = GifMapper.mapGiphyItemsToGifs(response.data);
      console.log({ search: gifs });

    })

  }
}
