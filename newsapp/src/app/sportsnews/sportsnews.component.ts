import { Component ,OnInit} from '@angular/core';
import { NewsapiService } from '../newsapi.service';

@Component({
  selector: 'app-sportsnews',
  templateUrl: './sportsnews.component.html',
  styleUrls: ['./sportsnews.component.css']
})
export class SportsnewsComponent implements OnInit {
   
  constructor(private api:NewsapiService){}

  sportnews: any=[];
  ngOnInit(): void {
    this.api.SportsNews().subscribe((result)=>{
      console.log(result.articles);
      this.sportnews=result.articles;
    })
  }

}
