import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-alunos',
  templateUrl: './lista-alunos.component.html',
  styleUrls: ['./lista-alunos.component.scss']
})
export class ListaAlunosComponent implements OnInit {

  @Input() alunosInput: any[];
  constructor() { }

  ngOnInit(): void {
   
  }

  

}
