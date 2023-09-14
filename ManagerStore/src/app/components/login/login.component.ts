import { Component, OnInit } from '@angular/core';
import { Credenciais } from '../models/credenciais';
import { FormControl, MinLengthValidator, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{

  creds: Credenciais = {

    user:'',
    password:''


  }

  //Serve para verificar se o email é valido
  user = new FormControl(null, Validators.email);
  password = new FormControl(null, Validators.minLength(3));

  constructor() {}

  ngOnInit(): void{

  }

  validaCampos(): Boolean {
   if(this.user.valid && this.password.valid){
    return true;
   }else{
    return false;
   }

  }


}
