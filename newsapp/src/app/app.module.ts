import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadlineComponent } from './topheadline/topheadline.component';
import {NewsapiService} from './newsapi.service';
import { TechnewsComponent } from './technews/technews.component';
import { BusinessComponent } from './business/business.component';
import { SportsnewsComponent } from './sportsnews/sportsnews.component';
@NgModule({
  declarations: [
    AppComponent,
    TopheadlineComponent,
    TechnewsComponent,
    BusinessComponent,
    SportsnewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [NewsapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
