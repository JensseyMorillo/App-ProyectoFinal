import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecoverPasswordService {

  constructor(private http: HttpClient) {}

  url = 'https://adamix.net/defensa_civil/def/recuperar_clave.php';

  postData(cedula: string, correo: string): void {
    const formData = new FormData();

    formData.append('cedula', cedula);
    formData.append('correo', correo);

    this.http
      .post(this.url, formData)
      .subscribe((result) => {
        console.log(result);
      });
  }
}
