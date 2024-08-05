import { Component, OnInit } from '@angular/core';
import {  MiembrosApiService } from '../miembros-api.service';

@Component({
  selector: 'app-miembros',
  templateUrl: './miembros.page.html',
  styleUrls: ['./miembros.page.scss'],
})
export class MiembrosPage implements OnInit {
  getdata:any[]=[];
  constructor(public _services:  MiembrosApiService) { 
    this._services.getdata<any>("").subscribe(data => {
      this.getdata = data.datos
      console.log(this.getdata);
    }
    )
  }

  ngOnInit() {
  }
}
