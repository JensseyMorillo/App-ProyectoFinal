import { Component, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { GetapiService } from '../serviciosapi/getapi.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.page.html',
  styleUrls: ['./servicios.page.scss'],
})
export class ServiciosPage {

  @ViewChild(IonContent) content!: IonContent;

  getdata: any []=[];

  constructor( public _services: GetapiService ) { 
    this._services.getdata<any>("").subscribe(data => {
      this.getdata = data.datos
      console.log(this.getdata);
    })
  }

  scrollToTop() {
    this.content.scrollToTop(500);
  }

}
