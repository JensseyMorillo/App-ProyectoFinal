import { Component, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.page.html',
  styleUrls: ['./acercade.page.scss'],
})
export class AcercadePage implements OnInit {

  async ivory() {
    await Browser.open({ url: 'https://t.me/Ivory002'})
  }
  async manuel() {
    await Browser.open({ url: 'https://t.me/ManuelCustodio27'})
  }
  async adrian() {
    await Browser.open({ url: 'https://t.me/adrianmotasilverio'})
  }

  constructor() { }

  ngOnInit() {
  }

}
