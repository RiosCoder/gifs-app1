import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface MenuOpcion {
  icon: string;
  label: string;
  route: string;
  subLabel: string;
}

@Component({
  selector: 'gifs-side-menu-options',
  imports: [
    RouterLink, RouterLinkActive
  ],
  templateUrl: './gifs-side-menu-options.component.html',
  styleUrl: './gifs-side-menu-options.component.css',
})
export class GifsSideMenuOptionsComponent {
  menuOptions: MenuOpcion[] = [
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Trending',
      route: '/dashboard/trending',
      subLabel: 'Gifs populares',
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      label: 'Buscador',
      route: '/dashboard/search',
      subLabel: 'Buscar gifs',
    },
  ];
}
