import { Component,EventEmitter, Output } from "@angular/core";

@Component({
    selector:'cadastro-aluno',
    templateUrl: './cadastro-aluno.component.html',
    styleUrls: [],
})
export class CadastroAlunoComponent {

    @Output() aoCadastrar = new EventEmitter<any>();

    nome : string;

    cadastrar(){
        console.log("Solicitada o cadastro do aluno ");
        console.log("Nome", this.nome);
        this.nome = this.nome;
        const aluno = {nome : this.nome};
        this.aoCadastrar.emit(aluno);
        this.limparCampos();

    } 
    
    limparCampos(){
        this.nome = "";
    }
}