import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetapiService {

  constructor( public _http: HttpClient) { }

  getdata<T>( url: string ) {
    url = 'https://adamix.net/defensa_civil/def/videos.php'
    return this._http.get<T>(url);
  } 

}
