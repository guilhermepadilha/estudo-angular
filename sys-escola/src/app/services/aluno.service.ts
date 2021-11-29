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
<<<<<<< HEAD
    this.url = 'http://localhost:5000/insere';
    return this.httpClient.post<Aluno>(this.url,aluno);
  }

  todos() {
    this.url = 'http://localhost:5000/alunos';
=======
    aluno.data = new Date();
    this.listaAlunos.push(aluno);
  }

  todos() {
>>>>>>> 49fa33fa826e7a179684013f15973d7e29525bc9
    return this.httpClient.get<Aluno[]>(this.url);
  }
}
