import { Component, Input } from '@angular/core';
import { Movie } from '../movie.model';
import { rootUrl } from '../endpoint';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styles: [`
    .active {
      border: solid 5px green;
    }
  `]
  // styleUrls: ['./movie.component.css']
})
export class MovieComponent {
  @Input() movie: Movie;
  endpoint: string;
  movieDetails: string[];
  condition: boolean;

  constructor() {
      this.endpoint = rootUrl;
      this.movieDetails = [];
      this.condition = true;
   }

   showDetails(id: string) {
      fetch(`${this.endpoint}&i=${id}`)
      .then( response => response.json() )
      .then( data => this.setData(data) )
   }

   setData(data: object) {
     for (let detail in data) {
       if (detail === "Ratings"){
          this.addRatings(data[detail]);
       }
       else {
        this.movieDetails.push(`${detail}: ${data[detail]}`)
       }
     }
   }

   addRatings(ratings) {
    ratings.map( rating => this.movieDetails.push(`${rating.Source}: ${rating.Value}`) );
   }

   width = this.getWidth();

    public getWidth() {
        return '333';
    }
}
