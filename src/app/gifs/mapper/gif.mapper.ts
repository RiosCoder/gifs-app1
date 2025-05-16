import { Gif } from "src/app/iterfaces/gif.interface";
import { GiphyItem } from "src/app/iterfaces/giphy.interfaces";

export class GifMapper {
    static mapGiphyItemToGif(item: GiphyItem): Gif {
        return {
            id: item.id,
            tittle: item.title,
            url: item.images.original.url,
        };
    }

    static mapGiphyItemsToGifs(items: GiphyItem[]): Gif[] {
        return items.map((item) => this.mapGiphyItemToGif(item));
    }
}