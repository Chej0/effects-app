import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppState } from 'src/app/store/app.reducers';
import { Store } from '@ngrx/store';
import { cargarUsuario } from 'src/app/store/actions';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuario: Usuario;
  loading = false;
  error: any;
  constructor(private router: ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.router.params.subscribe( ({ id }) => {
      console.log(id);
      this.store.dispatch(cargarUsuario({ id }));
    });
    this.store.select('usuario').subscribe(({ user, loading, error }) => {
      this.usuario = user;
      this.loading = loading;
      this.error = error;
    });
  }

}
