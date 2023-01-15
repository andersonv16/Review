const avaliacoes = [
  {
    id: 0,
    nome: "João Silva",
    cargo: "Desenvolvedor de Software",
    texto:
      "João é um desenvolvedor altamente habilidoso com uma ótima atenção aos detalhes. Ele sempre vai além do necessário para garantir que o projeto seja concluído no prazo e com a máxima qualidade.",
    imagem:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
  },
  {
    id: 1,
    nome: "Emily Johnson",
    cargo: "Gerente de Projetos de TI",
    texto:
      "Emily é uma gerente de projetos fantástica que sempre mantém a equipe no caminho certo e dentro do cronograma. Ela é ótima em comunicação e garantindo que todos estejam na mesma página.",
    imagem:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
  },
  {
    id: 2,
    nome: "Michael Brown",
    cargo: "Analista de Dados",
    texto:
      "Michael é um gênio dos dados. Tem uma grande capacidade de transformar dados complexos em insights valiosos. Está disposto a ajudar os outros a aprender, é valioso para qualquer organização.",
    imagem:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
  },
  {
    id: 3,
    nome: "Amanda Davis",
    cargo: "Engenheira de Rede",
    texto:
      "Amanda é uma engenheira de rede de primeira linha. Extremamente conhecedora e sempre disposta a ajudar os outros. É capaz de resolver rapidamente qualquer problema que surja.",
    imagem:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
  },
];

const imagemPessoa = document.querySelector(".imagem__pessoa");
const nomePessoa = document.querySelector(".nome__pessoa");
const cargoPessoa = document.querySelector(".cargo__pessoa");
const textoAvaliacao = document.querySelector(".texto__review");
const botaoAnterior = document.querySelector(".botao__prev");
const botaoProximo = document.querySelector(".botao__next");
const botaoAleatorio = document.querySelector(".botao__random");

let indiceAvaliacao = 0;

botaoAnterior.addEventListener("click", () => {
  indiceAvaliacao--;
  if (indiceAvaliacao < 0) {
    indiceAvaliacao = avaliacoes.length - 1;
  }
  atualizarAvaliacao(indiceAvaliacao);
});

botaoProximo.addEventListener("click", () => {
  indiceAvaliacao++;
  if (indiceAvaliacao > avaliacoes.length - 1) {
    indiceAvaliacao = 0;
  }
  atualizarAvaliacao(indiceAvaliacao);
});
botaoAleatorio.addEventListener("click", () => {
  indiceAvaliacao = Math.floor(Math.random() * 4);
  atualizarAvaliacao(indiceAvaliacao);
});

function atualizarAvaliacao(indiceAvaliacao) {
  const avaliacao = avaliacoes[indiceAvaliacao];
  imagemPessoa.src = avaliacao.imagem;
  nomePessoa.innerHTML = avaliacao.nome;
  cargoPessoa.innerHTML = avaliacao.cargo;
  textoAvaliacao.innerHTML = avaliacao.texto;
}

atualizarAvaliacao(indiceAvaliacao);
