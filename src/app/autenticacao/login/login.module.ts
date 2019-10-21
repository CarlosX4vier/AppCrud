import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

//Modulos do Firebase e FirebaseAuth para Angular
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';

import { LoginPage } from './login.page';
import { environment } from 'src/environments/environment';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  }
];

//Modulo ReactiveFormsModule deve ser colocado
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginPage]
})
export class LoginPageModule { }
