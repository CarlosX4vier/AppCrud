import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', loadChildren: './autenticacao/login/login.module#LoginPageModule' },
  { path: 'cadastro', loadChildren: './autenticacao/cadastro/cadastro.module#CadastroPageModule' },
  { path: 'tarefas-list', loadChildren: './tarefas/pages/tarefas-list/tarefas-list.module#TarefasListPageModule' },
  { path: 'tarefa-save', loadChildren: './tarefas/pages/tarefa-save/tarefa-save.module#TarefaSavePageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
