import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@Component({
  selector: 'app-lister',
  templateUrl: './lister.component.html',
  styleUrls: ['./lister.component.css']
})
export class ListerComponent implements OnInit {

  currentPage:number=1;
  contents = [];
  constructor(private contentService: ContentService) { }

  onScroll () {
    if(this.currentPage < 3){
    this.contentService.getContent(this.currentPage+1)
                .subscribe((content)=>{ this.contents = this.contents.concat(content); this.currentPage=this.currentPage+1;})
                console.log("scrolled");
    }
  }

  onSearch() {
     console.log("searching");
  }

  ngOnInit() {
    this.contentService.getContent(this.currentPage)
                .subscribe((content)=>{ this.contents = content;})
                console.log(this.contents);
  }

}
