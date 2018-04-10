import { Injectable } from '@angular/core';
import { CONTENTPAGE1 } from './api/contentListingPage1';
import { CONTENTPAGE2 } from './api/contentListingPage2';
import { CONTENTPAGE3 } from './api/contentListingPage3';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ContentService {

  constructor() { 
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

}
