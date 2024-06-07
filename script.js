const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "1. Dentro de um labirinto misterioso, o viajante pode:",
        alternativas: [
            {
                texto: "A) Seguir a trilha de luz.",
                afirmacao: "1. Você encontrou o Jardim Secreto. "
            },
            {
                texto: "B) Ouvir a voz sussurrante.",
                afirmacao: "1. Levou você a um sono profundo."
            }
        ]
    },
    {
        enunciado: "2. Diante de uma encruzilhada no deserto, o nômade pode:",
        alternativas: [
            {
                texto: "A) Seguir a estrela brilhante.",
                afirmacao: "2. Encontrou uma lâmpada magica."
            },
            {
                texto: "B) Ouvir o vento.",
                afirmacao: "2. Encontrou uma Ilha dos Sonhos."
            }
        ]
    },
    {
        enunciado: "3. No cruzamento de duas estradas, o peregrino pode:",
        alternativas: [
            {
                texto: "A) Seguir a estrada larga.",
                afirmacao: "3. No final do caminho estreito, havia um monstro. Você morreu."
            },
            {
                texto: "B) Seguir o caminho estreito.",
                afirmacao: "3. No final do caminho estreito, você encontrou um lugar de paz."
            }
        ]
    },
    {
        enunciado: "4. Em uma floresta encantada, o aventureiro pode:",
        alternativas: [
            {
                texto: "A) Seguir a trilha de flores.",
                afirmacao: "4. Uma trilha com vários aromas diferentes."
            },
            {
                texto: "B) Seguir o riacho murmuroso.",
                afirmacao: "4. Ouviu lamentações daqueles que foram condenados"
            }
        ]
    },
    {
        enunciado: "5. Na entrada de uma caverna mística, o explorador pode:",
        alternativas: [
            {
                texto: "A) Seguir a luz dourada.",
                afirmacao: "5. Te levou para um castelo de ouro."
            },
            {
                texto: "B) Seguir a sombra profunda",
                afirmacao: "5. Te levou para uma masmorra obscura."
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
    caixaPerguntas.textContent = "Obrigada por participar!";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
