import { Component,EventEmitter, Output } from "@angular/core";
import { AlunoService } from '../services/aluno.service';
import {Router } from '@angular/router';

@Component({
    selector:'cadastro-aluno',
    templateUrl: './cadastro-aluno.component.html',
    styleUrls: ['./cadastro-aluno.component.scss'],
})
export class CadastroAlunoComponent {

    @Output() aoCadastrar = new EventEmitter<any>();
    constructor(private service : AlunoService, private router :  Router) { }
    nome : string;
    idade : number;
    cadastrar(){
        const aluno = {nome : this.nome, idade : this.idade};
        console.log("aluno", aluno);
        this.service.adicionar(aluno).subscribe((x) => console.log(this.aoCadastrar.emit(x)));
        this.router.navigateByUrl('alunos');
        this.limparCampos();    } 
    
    limparCampos(){
        this.nome = "";
        this.idade = 0; 
    }
}