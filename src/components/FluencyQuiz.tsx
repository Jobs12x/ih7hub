import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

const quizQuestions = [
  {
    question: "Quando você usa IA, normalmente você:",
    options: [
      "Faz perguntas diretas e espera a resposta",
      "Ajusta a pergunta até obter algo melhor",
      "Usa a IA para explorar possibilidades e gerar novas perguntas",
    ],
  },
  {
    question: "Ao receber uma resposta da IA, você:",
    options: [
      "Aceita e usa",
      "Ajusta ou pede refinamento",
      "Questiona, valida e contrapõe",
    ],
  },
  {
    question: "Seus prompts costumam ser:",
    options: [
      "Genéricos",
      "Estruturados com contexto",
      "Estratégicos, com objetivo claro e direcionamento",
    ],
  },
  {
    question: "Você usa IA principalmente para:",
    options: [
      "Responder dúvidas rápidas",
      "Apoiar tarefas do dia a dia",
      "Resolver problemas mais complexos ou tomar decisões",
    ],
  },
  {
    question: "Quando a IA erra ou traz algo superficial:",
    options: [
      "Ignora ou aceita",
      "Pede para melhorar",
      "Identifica o erro e redefine o caminho",
    ],
  },
  {
    question: "No seu trabalho, a IA:",
    options: [
      "É usada pontualmente",
      "Faz parte de algumas atividades",
      "Está integrada ao fluxo de trabalho",
    ],
  },
  {
    question: "Você sente que:",
    options: [
      "A IA faz por você",
      "Você e a IA colaboram",
      "Você conduz e a IA potencializa",
    ],
  },
  {
    question: "Quando começa uma tarefa com IA:",
    options: [
      "Vai direto pedir algo",
      "Dá algum contexto",
      "Define objetivo, critérios e direciona",
    ],
  },
  {
    question: "Você já usou IA para:",
    options: [
      "Buscar informações",
      "Organizar ou melhorar algo",
      "Criar algo novo ou inovar",
    ],
  },
  {
    question: "Seu nível de confiança na IA é:",
    options: [
      "Alto, usa sem questionar",
      "Moderado, valida às vezes",
      "Crítico, sempre valida",
    ],
  },
  {
    question: "Você usa IA para:",
    options: [
      "Executar tarefas",
      "Pensar melhor",
      "Expandir sua forma de pensar",
    ],
  },
  {
    question: "Em decisões importantes:",
    options: [
      "Usa pouco ou superficialmente",
      "Considera como uma das fontes",
      "Usa para análise, mas decide com autonomia",
    ],
  },
];

const TOTAL_QUESTIONS = quizQuestions.length;

interface DiagnosticResult {
  score: number;
  level: string;
  classification: string;
  behavior: string;
  risk: string;
  leverage: string;
  actions: string[];
}

function getDiagnostic(score: number): DiagnosticResult {
  if (score <= 18) {
    return {
      score,
      level: "Nível 1",
      classification: "Gerar Respostas",
      behavior:
        "Você usa a IA de forma reativa — faz perguntas, recebe respostas e segue adiante. O pensamento crítico ainda não está ativado na interação com a máquina. A IA decide o caminho, não você.",
      risk:
        "Dependência silenciosa. Quanto mais você aceita sem questionar, mais a IA molda suas decisões sem que você perceba. Você perde autonomia intelectual.",
      leverage:
        "Ativar o pensamento antes de abrir qualquer ferramenta. Trazer hipóteses, não apenas perguntas. Isso muda tudo.",
      actions: [
        "Na mentoria, você vai ativar sua alavanca de evolução com acompanhamento de perto",
        "Desenvolverá o hábito de pensar antes de perguntar — com método e prática guiada",
        "Construirá uma base sólida para operar com autonomia e pensamento crítico real",
      ],
    };
  }
  if (score <= 27) {
    return {
      score,
      level: "Nível 2",
      classification: "Refinar Raciocínio",
      behavior:
        "Você já direciona a IA com intenção e refina os outputs. Há pensamento crítico, mas ele ainda é inconsistente — funciona em algumas tarefas, mas não em todas. Falta sistema.",
      risk:
        "Platô de competência. Você sabe usar bem, mas não evolui. O risco é achar que já domina IA quando ainda opera abaixo do potencial estratégico.",
      leverage:
        "Sistematizar. Criar frameworks pessoais de uso, com critérios de avaliação e fluxos repetíveis. Sair do improviso inteligente para a fluência estruturada.",
      actions: [
        "Na mentoria, você vai sistematizar sua fluência com frameworks e fluxos guiados",
        "Terá acompanhamento para sair do improviso e construir consistência estratégica",
        "Vai acelerar sua evolução com feedbacks direcionados e prática estruturada",
      ],
    };
  }
  return {
    score,
    level: "Nível 3",
    classification: "Novas Perguntas",
    behavior:
      "Você opera com fluência real. A IA é uma extensão do seu pensamento — você conduz, questiona, valida e usa para expandir possibilidades. O protagonismo é seu.",
    risk:
      "Isolamento estratégico. Você evoluiu, mas se não sistematizar e compartilhar, seu conhecimento fica preso em você. Escala exige método replicável.",
    leverage:
      "Transformar sua fluência em sistema. Documentar, ensinar, replicar em equipes e projetos. Tornar a Inteligência Híbrida um ativo organizacional.",
    actions: [
      "Na mentoria, você vai transformar sua fluência em sistema replicável e escalável",
      "Terá suporte para documentar, estruturar e multiplicar seu conhecimento em equipes",
      "Vai consolidar seu protagonismo com método e visão estratégica de Inteligência Híbrida",
    ],
  };
}

const FluencyQuiz = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [scores, setScores] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (optionIndex: number) => {
    const newScores = [...scores, optionIndex + 1]; // A=1, B=2, C=3
    setScores(newScores);

    if (currentQ < TOTAL_QUESTIONS - 1) {
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
  const diagnostic = getDiagnostic(total);
  const progress = showResult ? 100 : (currentQ / TOTAL_QUESTIONS) * 100;

  return (
    <div className="max-w-[680px] mx-auto">
      {!showResult ? (
        <div key={currentQ} className="animate-fade-up">
          <div className="font-mono-label text-[11px] text-muted tracking-[0.1em] mb-3">
            Pergunta {currentQ + 1} de {TOTAL_QUESTIONS}
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
                <span className="font-mono-label text-gold mr-3 text-xs">
                  {["A", "B", "C"][i]}
                </span>
                {opt}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="animate-fade-up">
          {/* Score header */}
          <div className="text-center mb-10">
            <div className="font-mono-label text-[10px] tracking-[0.2em] uppercase text-gold mb-4">
              Seu diagnóstico de fluência em IA
            </div>
            <div className="font-display text-4xl font-bold text-white mb-1">
              {diagnostic.level}
            </div>
            <div className="font-mono-label text-sm text-gold tracking-wide">
              {diagnostic.classification}
            </div>
            <div className="font-mono-label text-xs text-muted mt-2">
              Pontuação: {diagnostic.score} de 36
            </div>
          </div>

          {/* Diagnostic sections */}
          <div className="space-y-6 text-left mb-10">
            <div className="p-5 bg-surface border border-border-v rounded-lg">
              <div className="font-mono-label text-[10px] tracking-[0.15em] uppercase text-gold mb-2">
                Leitura do comportamento
              </div>
              <p className="text-sm text-foreground leading-relaxed">
                {diagnostic.behavior}
              </p>
            </div>

            <div className="p-5 bg-surface border border-border-v rounded-lg">
              <div className="font-mono-label text-[10px] tracking-[0.15em] uppercase text-[hsl(0_60%_60%)] mb-2">
                ⚠ Risco oculto
              </div>
              <p className="text-sm text-foreground leading-relaxed">
                {diagnostic.risk}
              </p>
            </div>

            <div className="p-5 bg-surface border border-border-v rounded-lg">
              <div className="font-mono-label text-[10px] tracking-[0.15em] uppercase text-gold mb-2">
                Alavanca de evolução
              </div>
              <p className="text-sm text-foreground leading-relaxed">
                {diagnostic.leverage}
              </p>
            </div>

            <div className="p-5 bg-surface border border-border-v rounded-lg">
              <div className="font-mono-label text-[10px] tracking-[0.15em] uppercase text-gold mb-3">
                Próximos passos práticos
              </div>
              <ul className="space-y-2">
                {diagnostic.actions.map((action, i) => (
                  <li key={i} className="text-sm text-foreground leading-relaxed flex gap-2">
                    <span className="text-gold font-mono-label text-xs mt-0.5">{i + 1}.</span>
                    {action}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTAs */}
          <div className="text-center">
            <a
              href={`https://wa.me/5544991388809?text=${encodeURIComponent(
                `Olá Jenifer! Fiz o diagnóstico de fluência em IA e meu resultado foi: ${diagnostic.level} — ${diagnostic.classification} (${diagnostic.score}/36 pontos).\n\nGostaria de saber mais sobre a mentoria IH7!`
              )}`}
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
              Refazer diagnóstico →
            </button>
          </div>
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
