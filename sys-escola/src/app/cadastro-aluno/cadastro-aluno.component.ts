import { Component } from "@angular/core";

@Component({
    selector:'cadastro-aluno',
    templateUrl: './cadastro-aluno.component.html',
    styleUrls: [],
})
export class CadastroAlunoComponent {
    nome : string;

    cadastrar(){
        console.log("Solicitada o cadastro do aluno ");
        console.log("Nome", this.nome);

    }
}