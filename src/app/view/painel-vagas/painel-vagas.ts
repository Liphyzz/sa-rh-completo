import { Component, OnInit } from '@angular/core';
import { Vaga } from '../../model/vaga.model';

import { FormsModule } from '@angular/forms';
import { VagaService } from '../../service/vaga.service';

@Component({
  selector: 'app-painel-vagas',
  imports: [FormsModule],
  templateUrl: './painel-vagas.html',
  styleUrl: './painel-vagas.scss',
})
export class PainelVagas implements OnInit {
  //terminar de fazer o crud
  public vagas: Vaga[] = []; // carregar as info da API
  //Objeto para Interpolação do Formulário
  public vaga: Vaga = new Vaga(0, '', '', '', 0);

  constructor(private _vagaService: VagaService) {} //estabelece conexão quando a págian é carregada

  ngOnInit(): void {
    this.listarVagas();
  }

  // métodos READ ( Listar todas Vagas)
  listarVagas(): void {
    //preencher o vetor comas informações da API
    this._vagaService.getVagas().subscribe(
      // subscribe => Ferramenta do Observable para fazer conexão Assincrona
      //mapeamento de Dados
      (resposta) => {
        //convertendo a Respostas da API em Obj para o Vetor
        this.vagas = resposta.map((e) => new Vaga(e.id, e.nome, e.foto, e.descricao, e.salario));
      },
    );
  }

  //Listar Vaga Unica (get)
  listarVagaUnica(vaga: Vaga) {
    this.vaga = vaga;
  }

  //criar
  cadastrarVaga(): void {
    if (
      this.vaga.nome === '' ||
      this.vaga.descricao === '' ||
      this.vaga.foto === '' ||
      this.vaga.salario === 0
    ) {
      alert('Preencha todos os campos para cadastrar a vaga');
      return;
    }
    console.log(this.vaga);
    this._vagaService.cadastrarVaga(this.vaga).subscribe(() => {
      this.vaga = new Vaga(0, '', '', '', 0); //limpa o formulário
      this.listarVagas(); //atualiza a lista de vagas
      alert('Vaga Cadastrada com Sucesso');
      //recarrega a página para atualizar a lista de vagas
      location.reload();
    });
  }

  //atualizar
  atualizarVaga(id: any): void {
    this._vagaService.atualizarVaga(id, this.vaga).subscribe(() => {
      this.vaga = new Vaga(0, '', '', '', 0);
      this.listarVagas(); // atualiza a lista de vagas
      alert('Vaga Atualizada com Sucesso');
      location.reload();
    });
  }

  //deletar
  excluirVaga(id: any): void {
    this._vagaService.removerVaga(id).subscribe(() => {
      this.vaga = new Vaga(0, '', '', '', 0);
      this.listarVagas(); // atualiza a lista de vagas
      alert('Vaga Excluída com Sucesso');
      location.reload();
    });
  }
}
