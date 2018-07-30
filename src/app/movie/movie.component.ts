import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor(private _movieservice:MovieService) { }
moviesTitle:any;
moviesImg:any;

  ngOnInit() {
   this._movieservice.getMovies().subscribe((datas)=>
   {
    this._movieservice.getMovies().subscribe((datas)=>{
      this.moviesTitle = datas.data.movies[0].title;
      this.moviesImg = datas.data.movies[0].background_image_original;
   }
  )
  }
   )
}
}
