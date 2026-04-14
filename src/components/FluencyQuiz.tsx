import { useState } from "react";

const quizQuestions = [
  {
    question: "Como você normalmente começa a usar a IA?",
    options: [
      "Abro e escrevo o que preciso diretamente",
      "Penso no que quero antes, formulo minha hipótese",
      "Defino critérios de avaliação e o que farei com o output",
    ],
  },
  {
    question: "O que você faz com a primeira resposta da IA?",
    options: [
      "Uso como está, é geralmente suficiente",
      "Reviso e ajusto, peço refinamentos",
      "Questiono, comparo com minha visão, busco o que falta",
    ],
  },
  {
    question: "Quando você usa a IA, quem conduz o pensamento?",
    options: [
      "A IA sugere, eu aceito ou recuso",
      "Eu direciono, a IA executa e amplia",
      "Eu lidero o pensamento, a IA desafia minhas premissas",
    ],
  },
];

const results = [
  {
    level: "Nível 1 — Iniciante",
    desc: "Você usa a IA de forma reativa. O próximo passo é desenvolver o hábito de trazer suas hipóteses antes de abrir qualquer ferramenta. A mentoria começa exatamente aqui.",
  },
  {
    level: "Nível 2 — Intermediário",
    desc: "Você já direciona a IA com intenção, mas ainda tem espaço para aprofundar o pensamento crítico sobre os outputs. Na mentoria, você vai afinar sua curadoria e ganhar consistência estratégica.",
  },
  {
    level: "Nível 3 — Avançado",
    desc: "Você opera com fluência real em inteligência híbrida. A mentoria vai ajudá-la a sistematizar esse processo, expandir sua stack e tornar isso replicável em equipes e projetos.",
  },
];

const FluencyQuiz = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [scores, setScores] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (score: number) => {
    const newScores = [...scores, score + 1];
    setScores(newScores);

    if (currentQ < 2) {
      setCurrentQ(currentQ + 1);
    } else {
      setShowResult(true);
    }
  };

  const reset = () => {
    setCurrentQ(0);
    setScores([]);
    setShowResult(false);
  };

  const total = scores.reduce((a, b) => a + b, 0);
  const resultIdx = total <= 4 ? 0 : total <= 7 ? 1 : 2;
  const progress = showResult ? 100 : (currentQ / 3) * 100;

  return (
    <div className="max-w-[680px] mx-auto">
      {!showResult ? (
        <div key={currentQ} className="animate-fade-up">
          <div className="font-mono-label text-[11px] text-muted tracking-[0.1em] mb-3">
            Pergunta {currentQ + 1} de 3
          </div>
          <div className="font-display text-[22px] text-white mb-7 leading-snug">
            {quizQuestions[currentQ].question}
          </div>
          <div className="flex flex-col gap-2.5">
            {quizQuestions[currentQ].options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(i)}
                className="w-full px-6 py-[18px] bg-surface border border-border-v rounded-[10px] text-foreground text-sm text-left cursor-pointer transition-all leading-relaxed hover:bg-surface2 hover:border-gold hover:text-white hover:translate-x-1"
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center animate-fade-up">
          <div className="font-mono-label text-[10px] tracking-[0.2em] uppercase text-gold mb-4">
            Seu perfil de fluência
          </div>
          <div className="font-display text-4xl font-bold text-white mb-2">
            {results[resultIdx].level}
          </div>
          <div className="text-sm text-foreground leading-relaxed max-w-[480px] mx-auto mb-9">
            {results[resultIdx].desc}
          </div>
          <a
            href="https://wa.me/5544991388809"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-[26px] py-[13px] font-mono-label text-[11px] tracking-[0.12em] uppercase bg-gold text-bg-deep font-bold rounded-md transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_32px_hsl(38_48%_46%/0.3)]"
          >
            Aprofundar na mentoria
          </a>
          <button
            onClick={reset}
            className="block mx-auto mt-4 bg-transparent border-none text-muted text-xs cursor-pointer font-mono-label tracking-[0.1em] uppercase hover:text-gold transition-colors"
          >
            Refazer →
          </button>
        </div>
      )}

      {!showResult && (
        <div className="mt-10 h-0.5 bg-border-v rounded-full overflow-hidden">
          <div
            className="h-full bg-gold rounded-full transition-all duration-400"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </div>
  );
};

export default FluencyQuiz;
