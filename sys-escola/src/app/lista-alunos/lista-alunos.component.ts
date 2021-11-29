import { Component, Input, OnInit } from '@angular/core';
import { AlunoService } from '../services/aluno.service';

@Component({
  selector: 'app-lista-alunos',
  templateUrl: './lista-alunos.component.html',
  styleUrls: ['./lista-alunos.component.scss']
})
export class ListaAlunosComponent implements OnInit {

  public  alunosInput: any[];
  constructor(private service : AlunoService) { }

  ngOnInit(): void {
      this.service.todos().subscribe((x) => this.alunosInput = x); 
      console.log("retorno serviço fask ->", this.alunosInput);
  }
  
}
