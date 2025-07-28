import { Component } from "@angular/core";
import { MovieData, MoviesDataList } from "../movie/movie.datasource";


@Component({
    selector: 'movies',
    templateUrl: 'movies.component.html'
})

export class MoviesComponent {
    
    title = "Filmler";
    movieList = MoviesDataList;
    selectedMovie = new MovieData(0,"Defaut");
    GetMovieList() {
        return this.movieList;
    }
    MakeVisibleSelectedItem(movie:MovieData):void{
        
            this.selectedMovie=movie;
    }
}