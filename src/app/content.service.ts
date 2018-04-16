import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONTENTPAGE1 } from './api/contentListingPage1';
import { CONTENTPAGE2 } from './api/contentListingPage2';
import { CONTENTPAGE3 } from './api/contentListingPage3';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Http } from '@angular/http';


@Injectable()
export class ContentService {

  url: string;
    constructor(private http : Http){
      this.url  = 'https://api.datamuse.com/words?ml=';
    }

  getContent(pageNum: number):Observable<any>{
    if(pageNum==1){
      return of(CONTENTPAGE1);
    }else if(pageNum==2){
      return of(CONTENTPAGE2);
    }else if(pageNum==3){
      return of(CONTENTPAGE3);
    }
  }

  getMovieList(pageNum:number){
    return this.http.get(`assets/API/CONTENTLISTINGPAGE-PAGE${pageNum}.json`)
    .pipe(
        map((res:any) => {
          return (res.json());
        })
         // return res.page}) // or any other operator
      );
  }

  search_word(term, callback){
    var searchArray =[];
    var re = new RegExp(term, 'i');
    for(var i=0;i<CONTENTPAGE1.length;i++){
      if(CONTENTPAGE1[i].name.match(re)){
        searchArray.push(CONTENTPAGE1[i]);
      }
    }
    for(var i=0;i<CONTENTPAGE2.length;i++){
      if(CONTENTPAGE2[i].name.match(re)){
        searchArray.push(CONTENTPAGE2[i]);
      }
    }
    for(var i=0;i<CONTENTPAGE2.length;i++){
      if(CONTENTPAGE2[i].name.match(re)){
        searchArray.push(CONTENTPAGE2[i]);
      }
    }
    callback(searchArray);
 }
}
