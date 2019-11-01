import { NgModule } from '@angular/core';
import { TarefaItemComponent } from './tarefa-item/tarefa-item.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    TarefaItemComponent
  ],
  imports: [
    IonicModule
  ],
  exports: [
    TarefaItemComponent
  ]
})
export class ComponentsModule { }
