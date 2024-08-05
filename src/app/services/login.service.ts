import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  url = 'https://adamix.net/defensa_civil/def/iniciar_sesion.php';

  postData(cedula: string, clave: string): any {
    const formData = new FormData();
    let resultado = {};

    formData.append('cedula', cedula);
    formData.append('clave', clave);

    this.http.post(this.url, formData).subscribe((result: any) => {
      resultado = result;
    });

    return resultado;
  }
}
