import { Component, OnInit } from '@angular/core';
import { MedidasApiService } from '../medidas-api.service';

@Component({
  selector: 'app-medidas',
  templateUrl: './medidas.page.html',
  styleUrls: ['./medidas.page.scss'],
})
export class MedidasPage implements OnInit {
  getdata:any[]=[];
  constructor(public _services: MedidasApiService) { 
    this._services.getdata<any>("").subscribe(data => {
      this.getdata = data.datos
      console.log(this.getdata);
    }
    )
  }

  ngOnInit() {
  }
}
