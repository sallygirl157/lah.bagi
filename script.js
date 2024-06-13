const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "vocé gosta de festas?",
        alternativas: [
            {
                texto: "sim",
                afirmacao: ""
            },
            {
                texto: "não",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "vocé é mais introvertido ou extrovertido?",
        alternativas: [
            {
                texto: "introvertido",
                afirmacao: ""
            },
            {
                texto: "extrovertido",
                afirmacao:""
            }
        ]
    },
    {
        enunciado: "vocé prefere dia ou noite?",
        alternativas: [
            {
                texto: "dia",
                afirmacao: ""
            },
            {
                texto: "noite",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "vocé? pensa por qual lado, razão ou emoção?",
        alternativas: [
            {
                texto: "razão",
                afirmacao: ""
            },
            {
                texto: "emoção",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "quando vocé vai em uma festa que não conhece ninguém, você...",
        alternativas: [
            {
                texto: "fico mais no meu canto e só curto",
                afirmacao: ""
            },
            {
                texto: "chego socializando e fazendo amigos novos",
                afirmacao: ""
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "vocé é..";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();