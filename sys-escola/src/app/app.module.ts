import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';
import { FormsModule } from '@angular/forms';
import { ListaAlunosComponent } from './lista-alunos/lista-alunos.component';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
import { AppRoutingModule } from './app-routing.module';
=======
>>>>>>> 49fa33fa826e7a179684013f15973d7e29525bc9

@NgModule({
  declarations: [
    AppComponent,
    CadastroAlunoComponent,
    ListaAlunosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
<<<<<<< HEAD
    HttpClientModule,
    AppRoutingModule
=======
    HttpClientModule
>>>>>>> 49fa33fa826e7a179684013f15973d7e29525bc9
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
