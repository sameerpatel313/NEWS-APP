import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopheadlineComponent } from './topheadline/topheadline.component';
import { TechnewsComponent } from './technews/technews.component';
import { BusinessComponent } from './business/business.component';
import { SportsnewsComponent } from './sportsnews/sportsnews.component';

const routes: Routes = [
  {path:'', component:TopheadlineComponent},//top headline & home
  {path:'technews',component:TechnewsComponent},
  {path:'business',component:BusinessComponent},
  {path:'sportsnews',component:SportsnewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
