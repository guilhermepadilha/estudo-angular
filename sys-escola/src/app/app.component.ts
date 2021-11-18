import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sys-escola';
  alunos: any[] = [];

  cadastrar ($event){
    this.alunos.push({...$event, data : new Date()});
    console.log(this.alunos);
  }
}
