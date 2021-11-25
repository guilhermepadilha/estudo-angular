import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Aluno } from '../models/aluno.model';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  private listaAlunos: any[];
  private url = "http://localhost:5000/alunos"
  
  constructor(private httpClient : HttpClient) { 
    this.listaAlunos = [];
  }

  get alunos() {
    return this.listaAlunos;
  }

  adicionar(aluno: any) {
    aluno.data = new Date();
    this.listaAlunos.push(aluno);
  }

  todos() {
    return this.httpClient.get<Aluno[]>(this.url);
  }
}
