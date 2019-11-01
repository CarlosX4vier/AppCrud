import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Tarefa } from '../../model/tarefa.model';

@Component({
  selector: 'app-tarefas-list',
  templateUrl: './tarefas-list.page.html',
  styleUrls: ['./tarefas-list.page.scss'],
})
export class TarefasListPage implements OnInit {

  tarefas$ = new Observable<Tarefa[]>();

  constructor() { }

  ngOnInit(): void {
    this.tarefas$ = of([
      { id: "12345678aabb", titulo: "Estudar Angular", realizada: false },
      { id: "12345678ccbd", titulo: "Estudar Ionic", realizada: false }
    ]);
  }
}
