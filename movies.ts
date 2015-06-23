import {bootstrap, Component, View, NgFor} from 'angular2/angular2';
import {Movie, MoviesService} from 'moviesService'

@Component({
  selector: 'movies-app',
  appInjector: [MoviesService]
})
@View({
  templateUrl: 'movies.html',
  directives: [NgFor]
})
class MovieApp {

  movies:Array<Movie>;

  constructor(movies: MoviesService) {
      this.movies = movies.getList();
  }
  
  add(title) {
    this.movies.push({title: title.value});
    title.value = "";
  }

  favorite(movie) {
    movie.favorite = !movie.favorite;
  }

  favoriteAll($event) {
    let favorite = $event.target.checked;
    this.movies.forEach((movie)=> {
      movie.favorite = favorite;
    });
  }

}

bootstrap(MovieApp);
