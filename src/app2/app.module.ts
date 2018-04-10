import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ContentService}from './content.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppComponent } from './app.component';
import { ListerComponent } from './lister/lister.component';



@NgModule({
  declarations: [
    AppComponent,
    ListerComponent,
    
  ],
  imports: [
    BrowserModule, InfiniteScrollModule
  ],
  providers: [ContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
