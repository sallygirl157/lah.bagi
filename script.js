const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: " Quem foi o Boitatá?",
        alternativas: [
            {
                texto: "Ser do folclore brasileiro tradicionalmente identificado como uma cobra de fogo, cujo seu propósito é o e proteger os camposs daqueles que promovem inceêndios criminosos",
                afirmacao: ""
            },
            {
                texto: "Foi um dragão mitológico de origem japonesa, onde era venerado e clamado em rituais  ",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Qual a origem do folclore brasileiro?",
        alternativas: [
            {
                texto: "Se originou entre um consenso dos estudiosos do assunto; as lendas, festas e personagens que compõem o folclore brasileiro possuem influência europeia, portuguesa, africana e indígena.",
                afirmacao: ""
            },
            {
                texto: "Originada parcialmente pelos chineses, os franceses também estiveram presentes na criação do folclore.",
                afirmacao:""
            }
        ]
    },
    {
        enunciado: "Qual a lenda do Boto-cor-de-rosa?",
        alternativas: [
            {
                texto: "Dentro do folclore, a lenda fala de um boto que ",
                afirmacao: ""
            },
            {
                texto: "Na lenda, se decreve um boto que se transforma em um homem belo e sedutor. Na forma humana, o boto seduz as mulheres para engravidá-las. Essas mulheres são abandonadas pelo ser, que retorna para o rio em sua forma de animal.",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Quem è o companheiro da Cuca,uma bruxa do folclore brasileiro?",
        alternativas: [
            {
                texto: "O boitatà è o companheiro da Cuca",
                afirmacao: ""
            },
            {
                texto: "O saci-pererê é o companheiro da Cuca",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Qual é a origem da palavra folclore?",
        alternativas: [
            {
                texto: "A palavra folclore teve origem em 22 de aagosto de 1846.",
                afirmacao: ""
            },
            {
                texto: "Teve origem em 22 de agosto de 1776.",
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
    caixaPerguntas.textContent = "vocé tem um certo conhecimento sobre o Folclore agora!";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();