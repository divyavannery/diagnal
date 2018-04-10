import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import { ContentService } from './content.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  searchResult=[];
  searchTerm : FormControl = new FormControl();
  constructor(private contentService:ContentService){
    this.searchTerm.valueChanges
    .subscribe(data => {
      if(data.length === 0 || !data.trim()){
        this.searchResult=[];
      }else {
        this.contentService.search_word(data).subscribe(response =>{
            this.searchResult = response;
        })
      }
    })
      
  }
}
