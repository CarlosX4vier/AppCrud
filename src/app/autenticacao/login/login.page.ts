import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { AutenticacaoService } from 'src/app/core/services/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //formGroup repsonsavel pela autenticacao do formulario login
  autenticaForm: FormGroup;

  // Configuração que define se ação é cadastro nova conta ou login
  configs = {
    ehLogin: true, // Indica se estamos executando login(true), nova conta (false)
    acaoPrimaria: 'Login', //rotulo do botao de ação primaria
    acaoSecundaria: 'Criar Conta' // rotulo do botao de ação secundaria
  };

  //Criando validador do nome separado do autenticaForm para que ele seja inserido depois
  private nomeControl = new FormControl('', [Validators.required, Validators.minLength(3)]);

  constructor(private servicoAutenticacao: AutenticacaoService, private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  //Função que cria formulario e seus validadores de login
  private createForm(): void {
    this.autenticaForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  //Função chamada quando o formulario é enviado
  async onSubmit(provedor: string): Promise<void> {
    console.log("ta funcionando", this.autenticaForm);
  }

  get nome(): FormControl {
    return <FormControl>this.autenticaForm.get('nome');
  }

  get email(): FormControl {
    return <FormControl>this.autenticaForm.get('email');
  }

  get password(): FormControl {
    return <FormControl>this.autenticaForm.get('password');
  }

  //Quando o usuario clicar para criar conta ou que já tem conta
  alternaTela(): void {
    //Troca o valor da variavel configs.ehLogin
    this.configs.ehLogin = !this.configs.ehLogin;

    if (this.configs.ehLogin) {//ehLogin == true
      //Coloca os valores dos botoes
      this.configs.acaoPrimaria = 'Login';
      this.configs.acaoSecundaria = 'Criar conta';
      //Remove o controlador do campo nome
      this.autenticaForm.removeControl('nome');
    } else {//ehLogin == false
      //Adiciona o controlador do campo nome
      this.autenticaForm.addControl('nome', this.nomeControl);
      //Coloca os valores dos botoes
      this.configs.acaoPrimaria = 'Cadastrar';
      this.configs.acaoSecundaria = 'Já possuo uma conta';
    }
  }
}
