import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tarefa } from '../../model/tarefa.model';

@Component({
  selector: 'app-tarefa-item',
  templateUrl: './tarefa-item.component.html',
  styleUrls: ['./tarefa-item.component.scss'],
})
export class TarefaItemComponent {

  //<app-tarefa-item [tarefa]="" (delete)="" >
  @Input() tarefa: Tarefa;

  @Output() realizada = new EventEmitter<Tarefa>();
  @Output() update = new EventEmitter<Tarefa>();
  @Output() delete = new EventEmitter<Tarefa>();

}
