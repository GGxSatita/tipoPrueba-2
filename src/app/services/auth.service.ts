import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Auth, AuthResponse} from './../models/auth';
import { catchError } from 'rxjs';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public datosUsuario : AuthResponse | null = null;
  public URL_AUTH : string = 'https://dummyjson.com/auth/login';

  constructor(
    private cliente : HttpClient,
    private alerta : AlertController
  ) { }

  public autenticar({username, password}: Auth){
    this.cliente.post<AuthResponse>(this.URL_AUTH, {
      username,
      password
    },{
      headers : {
        'Content-Type': 'application/json'
      }
    }).pipe(
      catchError(async(error)=>{
        error.status
        return null;
      })
    )
    .subscribe((datosDeInternet)=>{
      this.datosUsuario = datosDeInternet;
    })
  }


}
