import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GifsSideMenuHeaderComponent } from "../../components/gifs-side-menu-header/gifs-side-menu-header.component";
import { GifsSideMenuOptionsComponent } from '../../components/gifs-side-menu-options/gifs-side-menu-options.component';

@Component({
  selector: 'app-dashboard-page',
  imports: [
    RouterOutlet,
    GifsSideMenuHeaderComponent,
    GifsSideMenuOptionsComponent
],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css'
})
export default class DashboardPageComponent {

}
