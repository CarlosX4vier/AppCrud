import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  //Cria a variavel fbAutentica  do tipo AngularFireAuth importado
  constructor(private fbAutentica: AngularFireAuth) { }

  //Metodo que realiza login com email e senha. Retorna uma promise
  private loginComEmail(email: string, senha: string): Promise<auth.UserCredential> {
    return this.fbAutentica.auth.signInWithEmailAndPassword(email, senha);
  }
  //Cria conta 
  private criarContaComEmail(email: string, senha: string, nome: string): Promise<auth.UserCredential> {
    return this.fbAutentica.auth.createUserWithEmailAndPassword(email, senha)
      .then(credentials => credentials.user.updateProfile({ displayName: nome, photoURL: null }) // Seta o nome
        .then(() => credentials) // Modifica o conteudo do retorno da função createUserWithEmailAndPassword
      );
  }

  //Responsavel por chamar as funções de cadastro e login
  private autenticacao(ehLogin: boolean, nome: string, email: string, senha: string): Promise<auth.UserCredential> {
    if (ehLogin) {
      return this.loginComEmail(email, senha);
    } else {
      return this.criarContaComEmail(email, senha, nome);
    }
  }

}
