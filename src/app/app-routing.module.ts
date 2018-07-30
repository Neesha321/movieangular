import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MovieComponent} from './movie/movie.component';
import { RouterModule, Routes } from '@angular/router';
import {DetailsComponent} from   './details/details.component';
const routes: Routes =[
  { path: '', component: MovieComponent },
  {path: 'details',component: DetailsComponent}
]
@NgModule({
  exports:[RouterModule],
  imports: [
    
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
