import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Registro , RegistroRespuesta} from './../models/registro';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  public URL_REGISTR : string = 'https://dummyjson.com/users/add ';

  public registro : Registro | null = null;

  constructor(
    private cliente : HttpClient
  ) { }

    public registrar({
      age,
      birthDate,
      firstName,
      gender,
      lastName,
      password,
      username}:Registro){
      this.cliente.post<RegistroRespuesta>(this.URL_REGISTR,{
        headers : {
          'Content-Type' : 'application/json'
        }
      }).subscribe((datos)=>{
        if(datos){
          this.registro = datos
        }
      })
    }


}
