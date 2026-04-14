import IH7Logo from "@/components/IH7Logo";
import ModuleAccordion from "@/components/ModuleAccordion";
import FluencyQuiz from "@/components/FluencyQuiz";
import SectionLabel from "@/components/SectionLabel";
import SectionTitle from "@/components/SectionTitle";
import SectionSep from "@/components/SectionSep";
import BtnGold from "@/components/BtnGold";
import BtnOutline from "@/components/BtnOutline";
import PlanCard from "@/components/PlanCard";
import { contentModules } from "@/data/modules";

const Index = () => {
  return (
    <div className="relative z-[1]">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-5 md:px-9 h-16 flex items-center justify-between bg-background/88 backdrop-blur-xl border-b border-border">
        <a href="#" className="flex items-center gap-2.5 no-underline">
          <IH7Logo size={38} />
          <span className="text-xl font-semibold text-white tracking-wide">IH7</span>
        </a>
        <ul className="hidden md:flex gap-8 list-none">
          {[["#", "Início"], ["#modulos", "Conteúdo"], ["#teste", "Diagnóstico"], ["#investimento", "Investimento"], ["https://wa.me/5544991388809", "Contato"]].map(([href, label]) => (
            <li key={href}><a href={href} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="text-[13px] font-medium text-[#b8924e] tracking-[0.05em] uppercase no-underline transition-colors hover:text-white">{label}</a></li>
          ))}
        </ul>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center pt-24 pb-20 relative z-[1]">
        <div className="max-w-[1040px] mx-auto px-5 md:px-9 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 lg:gap-[72px] items-center">
            <div>
              <div className="font-mono-label text-[11px] tracking-[0.2em] uppercase text-gold mb-7 flex items-center gap-2.5 animate-fade-up-1">
                <span className="w-7 h-px bg-gold" />
                Proposta de Mentoria · 2026
              </div>
              <h1 className="font-display text-[clamp(44px,5.5vw,68px)] font-bold text-white leading-[1.1] mb-3 animate-fade-up-2">
                Inteligência Híbrida <em className="italic text-gold">Aplicada:</em><br />Fluência em IA
              </h1>
              <p className="font-display italic text-lg text-muted mb-8 animate-fade-up-3">IA que amplia. Humano que lidera.</p>
              <div className="flex flex-col gap-3 animate-fade-up-3">
                <div className="bg-surface border border-border-v rounded-[10px] px-6 py-5 text-sm text-foreground leading-relaxed">
                  Um programa que vai além do básico, não apenas para entender o que é Inteligência Artificial, mas para saber como ela se aplica na realidade do seu negócio, no seu trabalho ou no seu dia a dia, com clareza de onde partir e direção estratégica.
                </div>
                <div className="bg-surface border border-border-v rounded-[10px] px-6 py-5 text-sm text-foreground leading-relaxed">
                  Co-criar com IA é ampliar a inteligência humana, aprofundar conhecimentos e construir fluência real em IA. Na mentoria você terá um acompanhamento para usar IA como um recurso.
                </div>
              </div>
              <div className="flex gap-3.5 flex-wrap mt-11 animate-fade-up-4">
                <BtnGold href="#investimento">Ver modalidades</BtnGold>
                <BtnOutline href="#modulos">O que inclui</BtnOutline>
              </div>
            </div>

            {/* HERO CARD */}
            <div className="bg-surface border border-border rounded-lg overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.4)] animate-fade-up-3">
              <div className="px-8 pt-7 pb-5 border-b border-border">
                <div className="font-mono-label text-[10px] tracking-[0.2em] uppercase text-gold mb-2">Mentoria IH7</div>
                <div className="font-display text-[22px] font-semibold text-white">Jenifer Calvi</div>
              </div>
              <div className="flex flex-col">
                {[
                  ["5", "Meses de duração"],
                  ["2×", "Encontros por mês"],
                  ["5", "Dimensões no diagnóstico de fluência"],
                  ["24h", "Retorno via WhatsApp direto"],
                ].map(([num, label], i) => (
                  <div key={i} className="px-8 py-5 border-b border-gold/[0.08] last:border-b-0 flex items-center justify-between transition-colors hover:bg-gold-glow">
                    <div className="font-display text-[32px] font-bold text-gold leading-none">{num}</div>
                    <div className="font-mono-label text-[10px] tracking-[0.12em] uppercase text-muted text-right max-w-[140px]">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionSep />

      {/* MISSÃO */}
      <section id="sobre" className="py-24 relative z-[1]">
        <div className="max-w-[1040px] mx-auto px-5 md:px-9">
          <SectionLabel>00 — Missão</SectionLabel>
          <SectionTitle>Sobre a <em className="italic text-gold">Mentoria</em></SectionTitle>
          <div className="bg-surface border border-border border-l-[3px] border-l-gold rounded-lg px-11 py-10 relative">
            <span className="absolute top-2 left-9 font-display text-[100px] leading-none text-gold/10">"</span>
            <p className="font-display italic text-[19px] text-white leading-relaxed">
              Preparar pessoas e organizações para adotarem e escalarem Inteligência Artificial por meio de uma abordagem híbrida — combinando capacidade humana com inteligência artificial de forma estratégica e sustentável.
            </p>
          </div>
        </div>
      </section>

      <SectionSep />

      {/* PARA QUEM */}
      <section className="py-24 relative z-[1]">
        <div className="max-w-[1040px] mx-auto px-5 md:px-9">
          <SectionLabel>01 — Público</SectionLabel>
          <SectionTitle>Para <em className="italic text-gold">Quem</em> É</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { tag: "Empreendedoras", title: "Tração & Expansão", desc: "Empreendedoras que querem tracionar e expandir seu negócio com o poder da Inteligência Artificial aplicada à estratégia." },
              { tag: "Profissionais", title: "Produtividade no Trabalho", desc: "Profissionais que querem melhorar sua produtividade no trabalho usando IA de forma prática e com resultados reais." },
              { tag: "Autônomos", title: "IA no Seu Negócio", desc: "Profissionais autônomos que querem usar IA no seu negócio para ganhar eficiência, escala e diferenciação no mercado." },
            ].map((item, i) => (
              <div key={i} className="group bg-surface border border-border-v rounded-lg px-8 py-8 relative overflow-hidden transition-all hover:border-gold/40 hover:bg-surface2">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gold/0 transition-all duration-400 group-hover:bg-gold" />
                <div className="font-mono-label text-[10px] tracking-[0.18em] uppercase text-gold mb-3">{item.tag}</div>
                <div className="font-display text-xl font-semibold text-white mb-3">{item.title}</div>
                <p className="text-sm text-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionSep />

      {/* MÓDULOS */}
      <section id="modulos" className="py-24 relative z-[1]">
        <div className="max-w-[1040px] mx-auto px-5 md:px-9">
          <SectionLabel>02 — Conteúdo</SectionLabel>
          <SectionTitle>O Que Está <em className="italic text-gold">Incluído</em></SectionTitle>
          <ModuleAccordion modules={contentModules} />
        </div>
      </section>

      <SectionSep />

      {/* QUIZ */}
      <section id="teste" className="py-24 relative z-[1]">
        <div className="max-w-[1040px] mx-auto px-5 md:px-9">
          <div className="font-mono-label text-[10px] tracking-[0.25em] uppercase text-gold mb-5 flex items-center justify-center gap-3">Autodiagnóstico</div>
          <h2 className="font-display text-[clamp(34px,4vw,52px)] font-bold text-white leading-tight mb-5 text-center">
            Em que nível você <em className="italic text-gold">está hoje?</em>
          </h2>
          <p className="text-sm text-muted text-center mb-14 max-w-[460px] mx-auto">Três perguntas rápidas para identificar seu estágio de fluência em inteligência híbrida.</p>
          <FluencyQuiz />
        </div>
      </section>

      <SectionSep />

      {/* INVESTIMENTO */}
      <section id="investimento" className="py-24 relative z-[1]">
        <div className="max-w-[1040px] mx-auto px-5 md:px-9">
          <SectionLabel>03 — Investimento</SectionLabel>
          <SectionTitle>Escolha Sua <em className="italic text-gold">Modalidade</em></SectionTitle>
          <p className="text-[13px] text-muted mb-3">Duração: 3 meses · 2 encontros por mês · parcelado ou à vista</p>

          {/* Coletiva */}
          <div className="font-mono-label text-[10px] tracking-[0.2em] uppercase text-gold pt-5 pb-3 flex items-center gap-3">
            <span className="w-6 h-px bg-gold inline-block" />
            Trabalho &amp; Negócios — Coletiva
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
            <PlanCard
              badge="Entrada" badgeStyle="gold"
              subtitle="Coletiva · Online"
              price="R$ 599" priceNote="Grupo pequeno · 2 encontros/mês · 3 meses"
              headline="Aprenda IA com quem está no mesmo movimento que você."
              description="Método estruturado, troca entre pares e orientação ao vivo — para sair do zero e começar a aplicar."
              cta="Quero começar" ctaHref="https://wa.me/5544991388809?text=Ol%C3%A1%20Jenifer!%20Tenho%20interesse%20no%20plano%20Coletiva%20Online."
              vagas="até 10 alunos por turma"
              features={[
                { text: "Diagnóstico de maturidade em IA (formato grupo)", included: true },
                { text: "Relatório coletivo com nível de maturidade e direcionamentos gerais", included: true },
                { text: "Módulo completo de inteligência híbrida aplicada", included: true },
                { text: "Stack de ferramentas de IA curada por contexto de atuação", included: true },
                { text: "2 sessões ao vivo por mês em grupo reduzido (online)", included: true },
                { text: "Gravações de todas as sessões", included: true },
                { text: "Acesso ao WhatsApp da mentora (dias úteis, até 24h)", included: true },
                { text: "Revisão de entregas entre sessões", included: false },
                { text: "Plano de ação individualizado", included: false },
              ]}
            />
            <PlanCard
              badge="+ Presença" badgeStyle="green"
              subtitle="Coletiva · Presencial"
              price="R$ 899" priceNote="Grupo pequeno · 2 encontros/mês · 3 meses"
              headline="O método ao vivo, com a profundidade que só o presencial entrega."
              description="Dinâmicas práticas, troca real entre pares e a energia de estar na sala — para quem aprende melhor em presença."
              cta="Quero começar" ctaHref="https://wa.me/5544991388809?text=Ol%C3%A1%20Jenifer!%20Tenho%20interesse%20no%20plano%20Coletiva%20Presencial."
              vagas="até 5 alunos por turma"
              featured
              features={[
                { text: "Diagnóstico de maturidade em IA com devolutiva ao vivo em grupo", included: true },
                { text: "Relatório coletivo com plano de ação e prioridades por perfil", included: true },
                { text: "Módulo completo de inteligência híbrida aplicada", included: true },
                { text: "Stack de ferramentas de IA curada por contexto de atuação", included: true },
                { text: "2 encontros presenciais por mês em grupo reduzido", included: true },
                { text: "Dinâmicas práticas presenciais exclusivas", included: true, badge: "PRESENCIAL" },
                { text: "Gravações de todas as sessões", included: true },
                { text: "Acesso ao WhatsApp da mentora (dias úteis, até 24h)", included: true },
                { text: "Revisão de entregas entre sessões", included: false },
                { text: "Plano de ação individualizado", included: false },
              ]}
            />
          </div>

          {/* Individual */}
          <div className="font-mono-label text-[10px] tracking-[0.2em] uppercase text-gold pt-5 pb-3 flex items-center gap-3">
            <span className="w-6 h-px bg-gold inline-block" />
            Carreira — Individual
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <PlanCard
              badge="Individual · Online" badgeStyle="gold"
              subtitle="Atendimento Exclusivo"
              price="R$ 1.200" priceNote="2 encontros/mês · 3 meses"
              headline="Acompanhamento focado no seu contexto, no seu ritmo."
              description="Sessões individuais com a Jeni para aplicar IA com intencionalidade na sua carreira — sem adaptação para grupo."
              cta="Quero garantir minha vaga" ctaHref="https://wa.me/5544991388809?text=Ol%C3%A1%20Jenifer!%20Tenho%20interesse%20no%20plano%20Individual%20Online."
              features={[
                { text: "Diagnóstico de maturidade em IA aprofundado, com foco no seu contexto de carreira", included: true },
                { text: "Relatório personalizado com plano de ação revisado ao longo do programa", included: true },
                { text: "Módulo completo de inteligência híbrida aplicada", included: true },
                { text: "Stack de ferramentas de IA selecionada para o seu objetivo de carreira", included: true },
                { text: "2 sessões individuais online por mês, exclusivas com Jenifer", included: true },
                { text: "Revisão de aplicações e entregas entre as sessões", included: true, badge: "EXCLUSIVO" },
                { text: "Gravações de todas as sessões", included: true },
                { text: "Prioridade de resposta no WhatsApp (dias úteis, até 24h)", included: true },
                { text: "Frameworks e materiais exclusivos presenciais", included: false },
              ]}
            />
            <PlanCard
              badge="Recomendado" badgeStyle="blue"
              subtitle="Individual · Presencial"
              price="R$ 1.550" priceNote="Atendimento exclusivo · 2 encontros/mês · 3 meses"
              headline="Para quem não quer só aprender IA. Quer liderar com ela."
              description="Máxima personalização, acompanhamento entre sessões e acesso a materiais exclusivos — para quem decidiu que IA vai ser uma vantagem competitiva real."
              cta="Quero garantir minha vaga" ctaHref="https://wa.me/5544991388809?text=Ol%C3%A1%20Jenifer!%20Tenho%20interesse%20no%20plano%20Individual%20Presencial."
              featured
              features={[
                { text: "Diagnóstico de maturidade em IA aprofundado, com foco no seu contexto de carreira", included: true },
                { text: "Relatório personalizado com plano de ação revisado e acompanhado ao longo do programa", included: true },
                { text: "Módulo completo de inteligência híbrida aplicada", included: true },
                { text: "Stack de ferramentas de IA selecionada especificamente para o seu contexto e objetivo", included: true },
                { text: "2 encontros presenciais individuais por mês, exclusivos com Jenifer", included: true },
                { text: "Revisão de aplicações e entregas entre as sessões", included: true, badge: "EXCLUSIVO" },
                { text: "Frameworks e materiais exclusivos não disponíveis nos planos coletivos", included: true, badge: "EXCLUSIVO" },
                { text: "Gravações de todas as sessões", included: true },
                { text: "Prioridade de resposta no WhatsApp (dias úteis, até 24h)", included: true },
              ]}
            />
          </div>

          <p className="text-xs text-muted italic mt-5 text-center">Todos os valores podem ser pagos à vista ou parcelados.</p>

          {/* Personalize */}
          <div className="mt-10 bg-gradient-to-br from-[#1e1640] to-[#1a1238] border border-gold/30 rounded-lg p-11 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
            <div className="flex items-start justify-between gap-10 flex-wrap">
              <div className="flex-1 min-w-[260px]">
                <div className="font-mono-label text-[9px] tracking-[0.25em] uppercase text-gold mb-4">✦ Personalizado</div>
                <div className="font-display text-[26px] font-bold text-white mb-3">Personalize seu plano!</div>
                <p className="text-sm text-foreground leading-relaxed max-w-[480px]">
                  Nenhuma jornada é igual. Se você tem uma demanda específica, quer combinar formatos ou precisa de algo diferente do que as modalidades acima oferecem, entre em contato para construirmos juntas um plano sob medida para o seu momento.
                </p>
              </div>
              <div className="flex items-center">
                <BtnGold href="https://wa.me/5544991388809">Falar com Jenifer</BtnGold>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionSep />

      {/* PRÓXIMOS PASSOS */}
      <section className="py-24 relative z-[1]">
        <div className="max-w-[1040px] mx-auto px-5 md:px-9">
          <SectionLabel>04 — Próximos Passos</SectionLabel>
          <SectionTitle>Como <em className="italic text-gold">Começar</em></SectionTitle>
          <div className="flex flex-col gap-2">
            {[
              { num: "I", title: "Entre em Contato", desc: "Acesse o WhatsApp para alinhar sua modalidade, condições e tirar dúvidas diretamente com Jenifer." },
              { num: "II", title: "Diagnóstico Inicial", desc: "Realize o diagnóstico inicial para entendermos seu ponto de partida e personalizar o programa." },
              { num: "III", title: "Confirme sua Vaga", desc: "Confirme a inscrição e inicie a imersão. As vagas são preenchidas por ordem de confirmação." },
            ].map((step, i) => (
              <div key={i} className="bg-surface border border-border-v rounded-lg px-9 py-7 flex items-center gap-8 transition-all hover:border-border hover:bg-surface2">
                <div className="font-display text-[52px] font-bold italic text-gold-dim leading-none shrink-0 w-14 text-center">{step.num}</div>
                <div>
                  <div className="text-[15px] font-semibold text-white mb-1">{step.title}</div>
                  <div className="text-[13px] text-muted">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Vagas */}
          <div className="mt-12 px-9 py-7 border border-gold/25 rounded-lg bg-gold-glow flex items-center gap-5 flex-col md:flex-row">
            <div className="w-2.5 h-2.5 bg-gold rounded-full shrink-0 animate-pulse-dot" />
            <div>
              <strong className="block font-mono-label text-[10px] tracking-[0.15em] uppercase text-gold mb-1">Vagas Limitadas</strong>
              <span className="text-[13px] text-foreground">O programa é desenhado para grupos pequenos e atendimento de qualidade. As vagas são preenchidas por ordem de confirmação.</span>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <div className="pt-20 relative z-[1]">
        <div className="max-w-[1040px] mx-auto px-5 md:px-9">
          <div className="bg-gradient-to-br from-[#1e1640] to-background border border-gold/35 rounded-lg px-14 py-[52px] text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-violet to-transparent" />
            <p className="font-display text-[clamp(18px,2.5vw,26px)] font-normal italic text-white leading-relaxed max-w-[680px] mx-auto">
              "Quanto mais IA, mais o humano importa.<br />
              <span className="text-gold">Recorrência acelera. Consistência constrói. Coerência diferencia.</span>"
            </p>
          </div>
        </div>
      </div>

      <SectionSep />

      {/* CTA FINAL */}
      <section className="py-[120px] text-center relative z-[1]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,hsl(268_28%_52%/0.1)_0%,transparent_65%)] pointer-events-none" />
        <div className="max-w-[1040px] mx-auto px-5 md:px-9 relative">
          <div className="font-mono-label text-[10px] tracking-[0.25em] uppercase text-gold mb-5">Pronta para começar?</div>
          <h2 className="font-display text-[clamp(40px,5vw,62px)] font-bold text-white leading-[1.1] mb-5">
            Inteligência que<br /><em className="italic text-gold">Transforma</em>
          </h2>
          <p className="text-[15px] text-muted max-w-[420px] mx-auto mb-11 leading-relaxed">
            Não apenas entender IA, mas saber exatamente como ela se aplica na sua realidade.
          </p>
          <BtnGold href="https://wa.me/5544991388809">Falar com Jenifer</BtnGold>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-11 relative z-[1]">
        <div className="max-w-[1040px] mx-auto px-5 md:px-9">
          <div className="flex items-center justify-between flex-col md:flex-row gap-5 text-center md:text-left">
            <div className="flex items-center gap-2.5">
              <IH7Logo size={32} />
              <div>
                <div className="font-semibold text-base text-white">IH7</div>
                <div className="font-mono-label text-[10px] tracking-[0.1em] text-muted">Inteligência que Transforma</div>
              </div>
            </div>
            <div className="text-xs text-muted leading-relaxed md:text-right">
              Jenifer Calvi — Fundadora & CEO<br />
              © IH7 Hub · 2026
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
