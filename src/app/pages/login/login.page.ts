import { Component, OnInit } from '@angular/core';
import {AuthService} from './../../services/auth.service';
import {FormControl, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public formulario : FormGroup;

  constructor(
    private builder : FormBuilder,
    private authServi : AuthService
  ) {
    this.formulario = builder.group({
      username : [''],
      password : ['']
    })
  }

  ngOnInit() {

  }

  public autenticar(){
    this.authServi.autenticar({
      password: '',
       username:''
    })
  }

}
