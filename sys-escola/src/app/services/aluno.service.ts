import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Aluno } from '../models/aluno.model';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  private listaAlunos: any[];
  private url = ""
  private qualquercoisa : any;
  constructor(private httpClient : HttpClient) { 
    this.listaAlunos = [];
  }

  get alunos() {
    return this.listaAlunos;
  }

  adicionar(aluno: any) {
    this.url = 'http://localhost:5000/insere';
    return this.httpClient.post<Aluno>(this.url,aluno);
  }

  todos() {
    this.url = 'http://localhost:5000/alunos';
    return this.httpClient.get<Aluno[]>(this.url);
  }
}
