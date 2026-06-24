import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Curriculo } from '../../model/curriculo.model';
import { CurriculoService } from '../../service/curriculo.service';

@Component({
  selector: 'app-painel-curriculos',
  imports: [FormsModule],
  templateUrl: './painel-curriculos.html',
  styleUrl: './painel-curriculos.scss',
})
export class PainelCurriculos implements OnInit {
  //terminar de fazer o crud
  public curriculos: Curriculo[] = []; // carregar as info da API
  //Objeto para Interpolação do Formulário
  public curriculo: Curriculo = new Curriculo(0, '', 0, '', '', '', '');

  constructor(private _curriculoService: CurriculoService) {} //estabelece conexão quando a págian é carregada

  ngOnInit(): void {
    this.listarCurriculos();
  }

  // métodos READ ( Listar todos os Currículos)
  listarCurriculos(): void {
    //preencher o vetor comas informações da API
    this._curriculoService.getCurriculos().subscribe(
      // subscribe => Ferramenta do Observable para fazer conexão Assincrona
      //mapeamento de Dados
      (resposta) => {
        //convertendo a Respostas da API em Obj para o Vetor
        this.curriculos = resposta.map((e) => new Curriculo(e.id, e.nome, e.idade, e.foto, e.descricao, e.experiencias, e.titulosEcargos));
      },
    );
  }

  //Listar Currículo Unico (get)
  listarCurriculoUnico(curriculo: Curriculo) {
    this.curriculo = curriculo;
  }

  //criar
  cadastrarCurriculo(): void {
    if (
      this.curriculo.nome === '' ||
      this.curriculo.idade === 0 ||
      this.curriculo.foto === '' ||
      this.curriculo.descricao === '' ||
      this.curriculo.experiencias === '' ||
      this.curriculo.titulosEcargos === ''
    ) {
      alert('Preencha todos os campos para cadastrar o currículo');
      return;
    }
    console.log(this.curriculo);
    this._curriculoService.cadastrarCurriculo(this.curriculo).subscribe(() => {
      this.curriculo = new Curriculo(0, '', 0, '', '', '', ''); //limpa o formulário
      this.listarCurriculos(); //atualiza a lista de currículos
      alert('Currículo Cadastrado com Sucesso');
      //recarrega a página para atualizar a lista de currículos
      location.reload();
    });
  }

  //atualizar
  atualizarCurriculo(id: any): void {
    this._curriculoService.atualizarCurriculo(id, this.curriculo).subscribe(() => {
      this.curriculo = new Curriculo(0, '', 0, '', '', '', '');
      this.listarCurriculos(); // atualiza a lista de currículos
      alert('Currículo Atualizado com Sucesso');
      location.reload();
    });
  }

  //deletar
  excluirCurriculo(id: any): void {
    this._curriculoService.removerCurriculo(id).subscribe(() => {
      this.curriculo = new Curriculo(0, '', 0, '', '', '', '');
      this.listarCurriculos(); // atualiza a lista de currículos
      alert('Currículo Excluído com Sucesso');
      location.reload();
    });
  }
}
