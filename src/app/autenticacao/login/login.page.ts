import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //formGroup repsonsavel pela autenticacao do formulario login
  autenticaForm: FormGroup;

  // Configuração que define se ação é cadastro nova conta ou login
  configs ={
    ehLogin:true, // Indica se estamos executando login(true), nova conta (false)
    acaoPrimaria:'Login', //rotulo do botao de ação primaria
    acaoSecundaria: 'Criar Conta' // rotulo do botao de ação secundaria
  };

  //criando validador
  private nomeControl = new FormControl('',[Validators.required, Validators.minLength(3)]);

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm(): void {
    this.autenticaForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    console.log("ta funcionando", this.autenticaForm);
  }

  get nome(): FormControl{
    return <FormControl>this.autenticaForm.get('nome');
  }

  get email(): FormControl {
    return <FormControl>this.autenticaForm.get('email');
  }

  get password(): FormControl {
    return <FormControl>this.autenticaForm.get('password');
  }

  alternaTela() : void{
    this.configs.ehLogin = !this.configs.ehLogin;

    if(this.configs.ehLogin){
      this.configs.acaoPrimaria = 'Login';
      this.configs.acaoSecundaria = 'Criar conta';
    this.autenticaForm.removeControl('nome');
    }else{//ehLogin == false
      this.autenticaForm.addControl('nome',this.nomeControl);
      this.configs.acaoPrimaria = 'Cadastrar';
      this.configs.acaoSecundaria = 'Já possuo uma conta';
    }
  }
}
