import { Component } from '@angular/core';
import {FormGroup, FormControl ,Validators} from '@angular/forms';
import { MoviesserviesService } from '../moviesservies.service';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchForm:FormGroup=new FormGroup({
    searchInput: new FormControl('')
   })
  MoviesSearched:any[]=[]
 
  imgprefix:string=`https://image.tmdb.org/t/p/original`;
 constructor(private _MoviesServies:MoviesserviesService){}
 

  search():void{

    const query = this.searchForm.get('searchInput')?.value
     this._MoviesServies.Search(query).subscribe((res)=>{
      
    this.MoviesSearched=res.results||[];
    
 })
  }
}  


// export class SearchComponent {
//   searchAttempted: boolean = false; // Track whether a search has been performed

//   searchMovies(): void {
//     this.isLoading = true; 
//     this.searchAttempted = true; // Mark that a search has been attempted

//     const query = this.searchForm.get('searchQuery')?.value;
//     this._MoviesService.searchMovies(query).subscribe(
//       (response) => {
//         this.searchResults = response.results || [];
//         this.isLoading = false;
//       },
//       (error) => {
//         console.error('Error fetching search results:', error);
//         this.searchResults = [];
//         this.isLoading = false;
//       }
      
//     );
//   }
 

// }