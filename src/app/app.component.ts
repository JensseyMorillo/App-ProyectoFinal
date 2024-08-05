import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Historia', url: '/historia', icon: 'book' },
    { title: 'Servicios', url: '/servicios', icon: 'list' },
    { title: 'Noticias', url: '/noticias', icon: 'megaphone' },
    { title: 'Videos', url: '/videos', icon: 'videocam' },
    { title: 'Albergues', url: '/albergues', icon: 'search' },
    { title: 'Maps', url: '/maps', icon: 'pin' },
    { title: 'Medidas preventivas', url: '/medidas', icon: 'alert' },
    { title: 'Miembros', url: '/miembros', icon: 'people' },
    { title: 'Quiero ser voluntario', url: '/voluntario', icon: 'heart' },
    { title: 'Acerca de', url: '/acercade', icon: 'information-circle' },
    { title: 'Iniciar sesión', url: '/iniciarsesion', icon: 'log-in' },
  ];

  constructor() {
    // this.loginService.postData('00000000000', '1234');
  }
}