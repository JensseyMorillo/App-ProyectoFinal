import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RecoverPasswordService } from '../services/recover-password.service';

@Component({
  selector: 'app-iniciarsesion',
  templateUrl: './recuperarclave.page.html',
  styleUrls: ['./recuperarclave.page.scss'],
})
export class RecuperarclavePage implements OnInit {
  cedula: string = '';
  correo: string = '';

  @ViewChild('cedula', { static: true }) cedulaElement: ElementRef;
  @ViewChild('correo', { static: true }) correoElement: ElementRef;
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private recoverPasswordService: RecoverPasswordService,
    cedulaElementRef: ElementRef,
    claveElementRef: ElementRef
  ) {
    this.cedulaElement = cedulaElementRef;
    this.correoElement = claveElementRef;
  }

  ngOnInit(): void {}

  sendData() {
    this.cedula = this.cedulaElement.nativeElement.value;
    this.correo = this.correoElement.nativeElement.value;
    this.recoverPasswordService.postData(this.cedula, this.correo);
  }
}
