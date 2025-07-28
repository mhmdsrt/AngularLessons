import { Component, Input} from '@angular/core';
import { MovieData } from '../movie/movie.datasource';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent {
  @Input() SelectedMovieDetail: MovieData;

 constructor(){
  this.SelectedMovieDetail=new MovieData(0,"Default")
 }


}
