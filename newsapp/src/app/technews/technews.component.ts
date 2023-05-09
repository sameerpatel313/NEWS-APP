import { Component,OnInit } from '@angular/core';
import { NewsapiService } from '../newsapi.service';

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent implements OnInit {
  

  
  constructor(private api:NewsapiService){}
  //technewsdata subscribe
  techNewsData: any=[];
  ngOnInit(): void {
    this.api.TechNews().subscribe((result)=>{
      console.log(result.articles);
      this.techNewsData=result.articles;
    })
  

  }

}
