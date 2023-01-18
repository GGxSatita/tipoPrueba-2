import { Component, OnInit } from '@angular/core';
import {RegistroService} from './../../services/registro.service';
import {FormControl, FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  public registroForm  : FormGroup

  constructor(
    private service : RegistroService,
    private builder : FormBuilder
  ) {
    this.registroForm = builder.group({
      firstName : [''],
      lastName :[''],
      age : [0],
      username :[''],
      password : [''],
      birthDate : [''],
      gender : [''],
    })
  }

  ngOnInit() {
  }

  registrar(){
    this.service.registrar({
      firstName: '',
      lastName :'',
      age : 0,
      username : '',
      password : '',
      birthDate : '',
      gender : 'male'
    })
  }
}
