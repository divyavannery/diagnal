import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ContentService}from './content.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatInputModule } from '@angular/material';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListerComponent } from './lister/lister.component';


@NgModule({
  declarations: [
    AppComponent,
    ListerComponent
  ],
  imports: [
    BrowserModule,InfiniteScrollModule, 
    MatInputModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule
  ],
  providers: [ContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
