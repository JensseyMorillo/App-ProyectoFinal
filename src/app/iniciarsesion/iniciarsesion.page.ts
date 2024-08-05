import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { resourceLimits } from 'worker_threads';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-iniciarsesion',
  templateUrl: './iniciarsesion.page.html',
  styleUrls: ['./iniciarsesion.page.scss'],
})
export class IniciarsesionPage implements OnInit {
  cedula: string = '';
  clave: string = '';

  @ViewChild('cedula', { static: true }) cedulaElement: ElementRef;
  @ViewChild('clave', { static: true }) claveElement: ElementRef;
  @ViewChild('mensaje', { static: true }) mensajeElement: ElementRef;
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    cedulaElementRef: ElementRef,
    claveElementRef: ElementRef,
    mensajeElementRef: ElementRef
  ) {
    this.cedulaElement = cedulaElementRef;
    this.claveElement = claveElementRef;
    this.mensajeElement = mensajeElementRef;
  }

  ngOnInit(): void {}

  sendData() {
    this.cedula = this.cedulaElement.nativeElement.value;
    this.clave = this.claveElement.nativeElement.value;
    const result = this.loginService.postData(this.cedula, this.clave);

    if (!result.exito) {
      this.mensajeElement.nativeElement.innerText =
        'Cedula o clave incorrectos';
      return;
    }

    this.saveSession(result.token, this.cedula);
  }

  saveSession(token: string, cedula: string) {
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("cedula", cedula);
  }

  deleteSession() {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("cedula");
  }
}
