import { Component, OnInit } from '@angular/core';
  import {MovieService} from '../movie.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
   movieslist:any;
   constructor(private _movieservice:MovieService){} 

  ngOnInit() {
      this._movieservice.getMovies().subscribe((datas)=>{
        this.movieslist = datas.data;
        console.log(this.movieslist);
       }
    )
  }

}
