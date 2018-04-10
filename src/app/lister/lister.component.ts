import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-lister',
  templateUrl: './lister.component.html',
  styleUrls: ['./lister.component.css'],
  animations: [
    trigger('searchAnimation', [
      state('small', style({
        width: '0px',
        display: 'none'
    })),
    state('large', style({
      width: '200px',
      display: 'inline'
    })),
    transition('small => large', animate('300ms ease-in', style({
    }))),
    transition('large => small', animate('300ms ease-in', style({
    }))),
    ]),
  ]
})
export class ListerComponent implements OnInit {

  currentPage:number=1;
  contents = [];
  state: string = 'small';
  searchResult=[];
  searchTerm : FormControl = new FormControl();
  searching=false;


  constructor(private contentService: ContentService) {
    
   }

  onScroll () {
    if(this.currentPage < 3 && this.searching===false){
    this.contentService.getContent(this.currentPage+1)
                .subscribe((content)=>{ this.contents = this.contents.concat(content); this.currentPage=this.currentPage+1;})
                console.log("scrolled");
    }
  }
  
  onSelected(item){
    this.contents=[item];
    this.searching=true;
    this.searchResult=[];
  }

  onSearch() {
     this.state = (this.state === 'small' ? 'large' : 'small');
  }

  ngOnInit() {
    this.searchTerm.valueChanges
    .subscribe(data => {
      if(data.length === 0 || !data.trim()){
        this.searchResult=[];
      }else {
        this.contentService.search_word(data,(result)=>{
          this.searchResult=result;
        });
      }
    })
    this.contentService.getContent(this.currentPage)
                .subscribe((content)=>{ this.contents = content;})
                console.log(this.contents);
  }

}
