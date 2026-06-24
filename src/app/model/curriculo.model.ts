export class Curriculo {
  // Construtor Encurtado //
  constructor(
    public id: number,
    public nome: string,
    public idade: number,
    public foto: string,
    public descricao: string,
    public experiencias: string,
    public titulosEcargos: string
  ) {}


  // Mapeamento de Dados da API (toMap e fromMap) //
  
  // to MAp OBJ => API
  toMap(): { [key: string]: any } {
    return {
      id: this.id,
      nome: this.nome,
      idade: this.idade,
      foto: this.foto,
      descricao: this.descricao,
      experiancias: this.experiencias,
      titulosEcargos: this.titulosEcargos
    };
  }

  // FromMAp = API => OBJ
  fromMap(map: any): Curriculo {
    return new Curriculo(map.id, map.nome, map.idade, map.foto, map.descricao, map.experiancias, map.titulosEcargos);
  }
}
