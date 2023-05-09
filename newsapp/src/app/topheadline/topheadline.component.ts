import { Component , OnInit} from '@angular/core';
import { NewsapiService } from '../newsapi.service';

@Component({
  selector: 'app-topheadline',
  templateUrl: './topheadline.component.html',
  styleUrls: ['./topheadline.component.css']
})
export class TopheadlineComponent  implements OnInit{
nd: any;

   constructor(private api:NewsapiService){}
   //display headlines data
    topHeadlinesData:any=[];
  ngOnInit(): void {
    this.api.newHeadlines().subscribe((result)=>{
      console.log(result.articles);
      this.topHeadlinesData=result.articles;
    })
  }

}
