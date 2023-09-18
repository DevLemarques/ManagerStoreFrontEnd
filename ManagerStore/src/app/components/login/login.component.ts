import { Component, OnInit } from '@angular/core';
import { Credenciais } from '../models/credenciais';
import { FormControl, MinLengthValidator, Validators } from '@angular/forms';
import { Toast, ToastrService } from 'ngx-toastr';



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

  constructor(private toast: ToastrService) {}

  ngOnInit(): void{

  }

  validaCampos(): Boolean {
   return this.user.valid && this.password.valid
  }
  
  logar(){
    this.toast.error('Usuário ou senha inválidos', 'Login');
    this.creds.password = '';
  }


}
