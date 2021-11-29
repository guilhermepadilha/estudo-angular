import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';
import { ListaAlunosComponent } from './lista-alunos/lista-alunos.component';

const routes : Routes = [
    {path : '', redirectTo : 'alunos', pathMatch : 'full'},
    { path : 'alunos', component : ListaAlunosComponent },
    { path : 'cadastro-alunos', component : CadastroAlunoComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}