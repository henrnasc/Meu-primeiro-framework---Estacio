import Livro from "../modelo/Livro"

var livros: Array<Livro> = [
  {
    codigo: 1,
    codEditora: 1,
    titulo: 'O que sobra',
    resumo: 'Esta foi uma das imagens mais tocantes do século XX: dois jovens, dois príncipes, caminhando atrás do caixão da mãe, enquanto o mundo acompanhava os eventos com tristeza ― e horror. Conforme Diana, a Princesa de Gales, era sepultada, bilhões de pessoas se perguntavam como se sentiam, e o que pensavam, os príncipes ― e como a vida deles iria se desenrolar a partir daquele momento.',
    autores: ['Príncipe Harry']
  },
  {
    codigo: 2,
    codEditora: 2,
    titulo: 'A psicologia financeira: lições atemporais sobre fortuna, ganância e felicidade',
    resumo: 'O sucesso financeiro tem menos a ver com a sua inteligência e muito mais a ver com o seu comportamento. E a forma como alguém se comporta é uma coisa difícil de se ensinar, mesmo para pessoas bastante inteligentes.',
    autores: ['Morgan Housel', 'Roberta Clapp', 'Bruno Fiuza']
  },
  {
    codigo: 3,
    codEditora: 3,
    titulo: 'Gatilhos Mentais',
    resumo: 'Nessa obra, você descobrirá como aplicar na prática 32 "gatilhos" no seu negócio, indo muito além de uma simples comunicação de vendas.',
    autores: ['Gustavo Ferreira']
  },
]

export default class ControleLivro {
  livros = livros

  obterLivros() {
    return livros
  }
  incluir(livro: Livro) {
    try {
      var codigo: number = (this.livros.length - 1);
      livro.codigo = this.livros[codigo].codigo + 1;
      this.livros.push(livro);
    }
    catch {
      livro.codigo = 1;
      this.livros.push(livro);
    }
  }
  excluir(num: Number) {
    var livroEncontrado = this.livros.findIndex((livro: Livro) => {
      return num === livro.codigo
    });
    this.livros.splice(livroEncontrado, 1)
  }
}