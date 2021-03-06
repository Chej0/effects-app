import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url = 'https://reqres.in/api';
  constructor(private http: HttpClient) { }

  getUsuers() {
    return this.http.get(`${ this.url }/users?per_page=6&delay=3`).pipe(
      // tslint:disable-next-line: no-string-literal
      map(respuesta => respuesta['data'])
    );
  }

  getUsuerById(id: string) {
    return this.http.get(`${ this.url }/users/${ id }`).pipe(
      // tslint:disable-next-line: no-string-literal
      map(respuesta => respuesta['data'])
    );
  }
}
