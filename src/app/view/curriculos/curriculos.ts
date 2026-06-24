import { Component, OnInit } from '@angular/core';
import { Curriculo } from '../../model/curriculo.model';
import { CurriculoService } from '../../service/curriculo.service';


@Component({
  selector: 'app-curriculos',
  imports: [],
  templateUrl: './curriculos.html',
  styleUrl: './curriculos.scss',
})

export class Curriculos implements OnInit {
  // Atributos //
  //vetor para armazenar os currículos
  public curriculos: Curriculo[] = [];

  constructor(private _curriculoService: CurriculoService) {} // ao criar abrir a página , estabelce conexão com a API

  ngOnInit(): void {
    this.listarCurriculos();
  }

  // método para Listar os Currículos (Controller)
  listarCurriculos(): void {
    this._curriculoService.getCurriculos().subscribe(
      // é o método do observable que permite fazer alguma coisa depois que estabeleceu a conexão
      (retornaCurriculos) => {
        this.curriculos = retornaCurriculos.map((e) => {
          return new Curriculo(e.id, e.nome, e.idade, e.foto, e.descricao, e.experiencias, e.titulosEcargos);
        }); // armazena o conteúdo retornado da API no vetor de currículos
      },
    );
  }
}
