import { Component, input } from '@angular/core';
import { GifListItemComponent } from "../gif-list-item/gif-list-item.component";
import { Router } from '@angular/router';
import { Gif } from 'src/app/iterfaces/gif.interface';

@Component({
  selector: 'gif-list',
  imports: [GifListItemComponent],
  templateUrl: './gif-list.component.html',
  styleUrl: './gif-list.component.css'
})
export class GifListComponent {
  gifs = input.required<Gif[]>();

}
