import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore'
import { Tarefa } from '../model/tarefa.model';
import { AutenticacaoService } from 'src/app/core/services/autenticacao.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  private collection: AngularFirestoreCollection<Tarefa>;

  constructor(private db: AngularFirestore, private autenticacao: AutenticacaoService) {
    this.autenticacao.estadoDaAutenticacao$.subscribe(user => {
      if(user){
        this.db.collection(`/users/${user.uid}/tarefas`);
    }else{
      this.db.collection(null);
    }
    }) 
  }

  create(tf: Tarefa): Promise<Tarefa>{
    return this.collection.add(tf).then( ()=>tf);
  }

  update (tf: Tarefa):Promise<Tarefa>{
    return this.collection.doc<Tarefa>(tf.id).update(tf).then(()=>tf)
  }

  delete(tf:Tarefa):Promise<void>{
    return this.collection.doc<Tarefa>(tf.id).delete()
  }

  buscaTodos():Observable<Tarefa[]>{
    return this.collection.valueChanges();
  }

  buscaPorId(id:string): Observable<Tarefa>{
    return this.collection.doc<Tarefa>(id).valueChanges();
  }
}
