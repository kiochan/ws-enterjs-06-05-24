import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MovieService } from '../movie/movie.service';

@Component({
  selector: 'app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.scss'],
})
export class AppShellComponent {
  sideDrawerOpen = false;

  genres$ = this.movieService.getGenres();

  private _searchValue = '';
  set searchValue(value: string) {
    this._searchValue = value;
    this.router.navigate(['search', value]);
  }
  get searchValue(): string {
    return this._searchValue;
  }

  constructor(
    private movieService: MovieService,
    private router: Router
  ) {}
}
