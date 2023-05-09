import { Component,OnInit } from '@angular/core';
import { NewsapiService } from '../newsapi.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit{
  business: any=[];

constructor(private api:NewsapiService){}

  ngOnInit(): void {
    this.api.BusinessNews().subscribe((result)=>{
      console.log(result.articles);
      this.business=result.articles;
    })
  }

}
