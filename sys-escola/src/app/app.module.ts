import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';
import { FormsModule } from '@angular/forms';
import { ListaAlunosComponent } from './lista-alunos/lista-alunos.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroAlunoComponent,
    ListaAlunosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
