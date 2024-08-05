import { Component } from '@angular/core';
import { GetapiService } from '../videosapi/getapi.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
})
export class VideosPage {

  getdata: any []=[];

  constructor( public _services: GetapiService ) { 
    this._services.getdata<any>("").subscribe(data => {
      this.getdata = data.datos
      console.log(this.getdata);
    })
  }

}
