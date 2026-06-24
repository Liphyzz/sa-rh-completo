import { Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Vaga } from '../model/vaga.model';

@Service()
export class VagaService {
  // Na versão nova com @Service ao invés de @Injectable, usa-se a função inject() em vez do construtor
  private http = inject(HttpClient);

  // Endereço de conexão da API
  private apiUrl = 'http://localhost:3000/vagas';

  // MÉTODOS DE CONEXÃO DA API

  // GET - Listar vagas
  getVagas(): Observable<Vaga[]> {
    return this.http.get<Vaga[]>(this.apiUrl);
  }

  // POST - Cadastrar vaga
  cadastrarVaga(vaga: Vaga): Observable<Vaga> {
    return this.http.post<Vaga>(this.apiUrl, vaga);
  }

  // PUT - Atualizar vaga
  atualizarVaga(id: any, vaga: Vaga): Observable<Vaga> {
    const urlAtualizado = `${this.apiUrl}/${id}`;
    return this.http.put<Vaga>(urlAtualizado, vaga);
  }

  // DELETE - Remover vaga
  removerVaga(id: any): Observable<any> {
    const urlDeletar = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(urlDeletar);
  }
}
