import {bootstrap, Component, View, NgFor} from 'angular2/angular2';

@Component({
  selector: 'movies-app'
})
@View({
  templateUrl: 'movies.html',
  directives: [NgFor]
})
class MovieApp {

  movies: any;

  constructor() {
    this.movies = [
      {title: "un"},
      {title: "deux"},
      {title: "trois"},
      {title: "quatre"}
    ]
  }
  
  favorite(movie) {
    movie.favorite = !movie.favorite;
  }

  favoriteAll($event) {
    var favorite = $event.target.checked;
    this.movies.forEach((movie)=> {
      movie.favorite = favorite;
    });
  }

}

bootstrap(MovieApp);
