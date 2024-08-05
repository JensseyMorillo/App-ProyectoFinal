import { Component, OnInit } from '@angular/core';
import { AlbergeApiService } from '../alberge-api.service';

@Component({
  selector: 'app-albergues',
  templateUrl: './albergues.page.html',
  styleUrls: ['./albergues.page.scss'],
})
export class AlberguesPage implements OnInit {
getdata:any[]=[];
  constructor(public _services: AlbergeApiService) { 
    this._services.getdata<any>("").subscribe(data => {
      this.getdata = data.datos
      console.log(this.getdata);
    }
    )
  }

  ngOnInit() {
  }

}
