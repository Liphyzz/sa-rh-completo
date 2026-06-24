import { Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Curriculo } from '../model/curriculo.model';

@Service()
export class CurriculoService {
  // Na versão nova com @Service ao invés de @Injectable, usa-se a função inject() em vez do construtor
  private http = inject(HttpClient);

  // Endereço de conexão da API
  private apiUrl = 'http://localhost:3000/curriculos';

  // MÉTODOS DE CONEXÃO DA API

  // GET - Listar curriculos
  getCurriculos(): Observable<Curriculo[]> {
    return this.http.get<Curriculo[]>(this.apiUrl);
  }

  // POST - Cadastrar curriculo
  cadastrarCurriculo(Curriculo: Curriculo): Observable<Curriculo> {
    return this.http.post<Curriculo>(this.apiUrl, Curriculo);
  }

  // PUT - Atualizar curriculo
  atualizarCurriculo(id: any, Curriculo: Curriculo): Observable<Curriculo> {
    const urlAtualizado = `${this.apiUrl}/${id}`;
    return this.http.put<Curriculo>(urlAtualizado, Curriculo);
  }

  // DELETE - Remover curriculo
  removerCurriculo(id: any): Observable<any> {
    const urlDeletar = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(urlDeletar);
  }
}

