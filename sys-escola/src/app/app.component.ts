import { Component } from '@angular/core';
import { AlunoService } from './services/aluno.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sys-escola';
  alunos: any[] = [];
  constructor(private service : AlunoService){}
  cadastrar ($event){
      this.service.adicionar($event);
  }
}
