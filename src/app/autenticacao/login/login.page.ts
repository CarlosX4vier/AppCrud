import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { AutenticacaoService } from 'src/app/core/services/autenticacao.service';
import { LoadingController, ToastController, NavController } from '@ionic/angular';
import { ToastOptions } from '@ionic/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //formGroup repsonsavel pela autenticacao do formulario login
  autenticaForm: FormGroup;
  private nomeTmp: string;

  // Configuração que define se ação é cadastro nova conta ou login
  configs = {
    ehLogin: true, // Indica se estamos executando login(true), nova conta (false)
    acaoPrimaria: 'Login', //rotulo do botao de ação primaria
    acaoSecundaria: 'Criar Conta' // rotulo do botao de ação secundaria
  };

  //Criando validador do nome separado do autenticaForm para que ele seja inserido depois
  private nomeControl = new FormControl('', [Validators.required, Validators.minLength(3)]);

  constructor(private navCtrl: NavController,private servicoAutenticacao: AutenticacaoService, private fb: FormBuilder, private loadingCtrl: LoadingController, private toastCtrl: ToastController) { }

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
    const loading = await this.loading();
    if (this.configs.ehLogin) {
      this.nomeTmp = "";
    } else {
      this.nomeTmp = this.autenticaForm.get("nome").value;
    }

    try {
      const credencial = await this.servicoAutenticacao.autenticacao(this.configs.ehLogin, this.nomeTmp, this.autenticaForm.get('email').value, this.autenticaForm.get('password').value);
      console.log("Login com sucesso", credencial);
      console.log("redirecionando...");
      this.navCtrl.navigateForward('tarefas-list');

    } catch (e) {
      console.log("ERROR", e);

    }finally{
      loading.dismiss();
    }
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

  async loading():Promise<HTMLIonLoadingElement>{
    const loading = await  this.loadingCtrl.create({
      message: 'Autenticando...'
    });
    await loading.present();
    return loading;
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

  async toast(options?: ToastOptions): Promise<HTMLIonToastElement>{

    const toast = await this.toastCtrl.create({
      position: 'bottom',
      duration: 3000,
      showCloseButton: true,
      closeButtonText: "Ok",
      ...options
    });

    await toast.present();
    return toast;

  }

}
