import { Component, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { GetapiService } from '../noticiasapi/getapi.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage {

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
