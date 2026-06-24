import { Component, OnInit } from '@angular/core';
import { VagaService } from '../../service/vaga.service';
import { Vaga } from '../../model/vaga.model';

@Component({
  selector: 'app-vagas',
  imports: [],
  templateUrl: './vagas.html',
  styleUrl: './vagas.scss',
})

export class Vagas implements OnInit {
  // Atributos //
  //vetor para armazenar as vagas
  public vagas: Vaga[] = [];

  constructor(private _vagaService: VagaService) {} // ao criar abrir a página , estabelce conexão com a API

  ngOnInit(): void {
    this.listarVagas();
  }

  // método para Listar as Vagas (Controller)
  listarVagas(): void {
    this._vagaService.getVagas().subscribe(
      // é o método do observable que permite fazer alguma coisa depois que estabeleceu a conexão
      (retornaVagas) => {
        this.vagas = retornaVagas.map((e) => {
          return new Vaga(e.id, e.nome, e.foto, e.descricao, e.salario);
        }); // armazena o conteúdo retornado da API no vetor de vagas
      },
    );
  }
}
