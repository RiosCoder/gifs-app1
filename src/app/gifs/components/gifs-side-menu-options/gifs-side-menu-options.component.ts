import { Component } from '@angular/core';

interface MenuOpcion {
  icon: string;
  label: string;
  route: string;
  subLabel: string;
}

@Component({
  selector: 'gifs-side-menu-options',
  imports: [],
  templateUrl: './gifs-side-menu-options.component.html',
  styleUrl: './gifs-side-menu-options.component.css',
})
export class GifsSideMenuOptionsComponent {
  menuOptions: MenuOpcion[] = [
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Trending',
      route: 'Gifs populares',
      subLabel: '/dashboard/trending',
    },
    {
      icon: 'fa-solid fa-magnifyng-glass',
      label: 'Buscador',
      route: 'Buscar gifs',
      subLabel: '/dashboard/search',
    },
  ];
}
