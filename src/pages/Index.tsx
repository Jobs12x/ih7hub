import IH7Logo from "@/components/IH7Logo";
import ModuleAccordion from "@/components/ModuleAccordion";
import FluencyQuiz from "@/components/FluencyQuiz";

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="font-mono-label text-[10px] tracking-[0.25em] uppercase text-gold mb-5 flex items-center gap-3">
    <span className="w-6 h-px bg-gold" />
    {children}
  </div>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-display text-[clamp(34px,4vw,52px)] font-bold text-white leading-tight mb-12">
    {children}
  </h2>
);

const SectionSep = () => (
  <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent relative z-[1]" />
);

const BtnGold = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    target={href.startsWith("http") ? "_blank" : undefined}
    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
    className="inline-flex items-center gap-2 px-[26px] py-[13px] font-mono-label text-[11px] tracking-[0.12em] uppercase bg-gold text-bg-deep font-bold rounded-md transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_32px_hsl(38_48%_46%/0.3)]"
  >
    {children}
  </a>
);

const BtnOutline = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="inline-flex items-center gap-2 px-[26px] py-[13px] font-mono-label text-[11px] tracking-[0.12em] uppercase bg-transparent text-foreground border border-border-v rounded-md transition-all hover:border-gold hover:text-gold"
  >
    {children}
  </a>
);

const contentModules = [
  {
    number: "01", tag: "Imersão", title: "Imersão em IA",
    short: "Fundamentação prática sem jargão, com aplicação real",
    content: (
      <ul className="flex flex-col gap-2.5 pt-6 list-none">
        {["Panorama atual de IA: o que está acontecendo, o que importa e o que é ruído",
          "IA aplicada ao seu contexto: carreira, gestão, negócios e processos",
          "Ferramentas e fluxos de trabalho com IA — uso estratégico, não superficial",
          "Cases reais e exemplos práticos de adoção com resultados concretos",
          "Como construir uma mentalidade orientada a IA sem perder a essência humana"
        ].map((t, i) => (
          <li key={i} className="text-sm text-foreground flex gap-3 items-start leading-relaxed">
            <span className="text-gold shrink-0 mt-0.5 text-[13px]">→</span>{t}
          </li>
        ))}
      </ul>
    ),
  },
  {
    number: "02", tag: "Diagnóstico", title: "Diagnóstico de Maturidade em IA",
    short: "Framework estruturado — saber onde você está antes de agir",
    content: (
      <div className="pt-6">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="font-mono-label text-[9px] tracking-[0.2em] uppercase text-gold p-3 text-left border-b border-border bg-gold-glow">Dimensão</th>
              <th className="font-mono-label text-[9px] tracking-[0.2em] uppercase text-gold p-3 text-left border-b border-border bg-gold-glow">O que será mapeado</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Conhecimento & Cultura", "Nível de familiaridade com IA e abertura da equipe ou organização para adoção"],
              ["Ferramentas & Processos", "Quais ferramentas são usadas, como e com que frequência"],
              ["Dados & Infraestrutura", "Capacidade de gerar, organizar e usar dados como insumo para decisões com IA"],
              ["Estratégia & Governança", "Existência de políticas, critérios e visão de longo prazo para uso de IA"],
              ["Resultado & Impacto", "Evidências de resultados gerados por IA e capacidade de medir impacto"],
            ].map(([dim, desc], i) => (
              <tr key={i} className="hover:bg-gold-glow transition-colors">
                <td className="p-4 text-xs font-semibold text-white whitespace-nowrap w-[220px] border-b border-gold/[0.06]">{dim}</td>
                <td className="p-4 text-[13px] text-foreground border-b border-gold/[0.06]">{desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
  },
  {
    number: "03", tag: "Ao Vivo", title: "Mentorias ao Vivo em Grupo",
    short: "Sessões mensais de 90 minutos com grupos reduzidos",
    content: (
      <ul className="flex flex-col gap-2.5 pt-6 list-none">
        {["Sessões mensais ao vivo com duração de 90 minutos",
          "Grupos pequenos para garantir atenção e qualidade nas interações",
          "Discussão de cases, dúvidas e aplicações práticas do conteúdo da imersão",
          "Gravações disponíveis para revisão posterior",
          "Ambiente de troca entre pares com perfis complementares"
        ].map((t, i) => (
          <li key={i} className="text-sm text-foreground flex gap-3 items-start leading-relaxed">
            <span className="text-gold shrink-0 mt-0.5 text-[13px]">→</span>{t}
          </li>
        ))}
      </ul>
    ),
  },
  {
    number: "04", tag: "Acesso Direto", title: "WhatsApp com a Mentora",
    short: "Canal direto durante todo o período, sem intermediários",
    content: (
      <ul className="flex flex-col gap-2.5 pt-6 list-none">
        {["Acesso via WhatsApp durante todo o período da mentoria",
          "Respostas em dias úteis com retorno em até 24 horas",
          "Ideal para ajustes rápidos, validação de decisões e desbloqueio de dúvidas práticas",
          "Conexão direta com a mentora, sem intermediários"
        ].map((t, i) => (
          <li key={i} className="text-sm text-foreground flex gap-3 items-start leading-relaxed">
            <span className="text-gold shrink-0 mt-0.5 text-[13px]">→</span>{t}
          </li>
        ))}
      </ul>
    ),
  },
];

type PlanFeature = { text: string; included: boolean; badge?: string };

const PlanCard = ({ badge, badgeStyle, subtitle, price, priceNote, headline, description, features, cta, ctaHref, vagas, featured = false }: {
  badge: string; badgeStyle?: "gold" | "green" | "blue"; subtitle?: string; price: string; priceNote: string; headline: string; description: string; features: PlanFeature[]; cta: string; ctaHref: string; vagas?: string; featured?: boolean;
}) => (
  <div className={`bg-surface border rounded-lg relative overflow-hidden flex flex-col ${featured ? 'border-primary/40 bg-gradient-to-br from-[#231847] to-[#1a1238]' : 'border-border-v'}`}>
    {featured && <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />}
    <div className="p-8 pb-0 flex-1">
      <div className={`inline-block text-[10px] tracking-[0.15em] uppercase font-mono-label px-3 py-1 rounded mb-4 ${
        badgeStyle === "green" ? "bg-[#2a6b3a]/30 text-[#6fcf7c] border border-[#6fcf7c]/30" :
        badgeStyle === "blue" ? "bg-primary/20 text-accent-foreground border border-accent/40" :
        "bg-surface2 text-muted border border-border-v"
      }`}>{badge}</div>
      {subtitle && <div className="font-mono-label text-[10px] tracking-[0.15em] uppercase text-muted mb-1">{subtitle}</div>}
      <div className="font-display text-[48px] font-bold text-white tracking-tight leading-none mb-1">{price}</div>
      <div className="text-[13px] text-gold italic mb-4">{priceNote}</div>
      <p className="text-[15px] text-white font-semibold mb-1.5">{headline}</p>
      <p className="text-[13px] text-muted leading-relaxed mb-6">{description}</p>

      <div className="h-px bg-border mb-5" />
      <div className="font-mono-label text-[9px] tracking-[0.15em] uppercase text-muted mb-4">Entregáveis</div>
      <ul className="flex flex-col gap-3 list-none mb-8">
        {features.map((f, i) => (
          <li key={i} className={`text-[13px] flex gap-2.5 items-start leading-snug ${f.included ? 'text-foreground' : 'text-muted/50 line-through'}`}>
            <span className={`shrink-0 mt-0.5 text-sm ${f.included ? 'text-[#6fcf7c]' : 'text-muted/40'}`}>{f.included ? '✓' : '✕'}</span>
            <span className="flex-1">
              {f.text}
              {f.badge && <span className={`ml-2 inline-block text-[9px] tracking-[0.1em] uppercase font-mono-label px-1.5 py-0.5 rounded ${
                f.badge === "PRESENCIAL" ? "bg-gold/20 text-gold" :
                f.badge === "EXCLUSIVO" ? "bg-[#2a6b3a]/30 text-[#6fcf7c]" :
                "bg-accent/20 text-accent-foreground"
              }`}>{f.badge}</span>}
            </span>
          </li>
        ))}
      </ul>
    </div>
    <div className="p-8 pt-0">
      <a href={ctaHref} target="_blank" rel="noopener noreferrer"
        className="block w-full text-center px-6 py-3.5 font-mono-label text-[11px] tracking-[0.12em] uppercase bg-surface2 text-white border border-border-v rounded-md transition-all hover:border-gold hover:text-gold">
        {cta} <span className="ml-1">↗</span>
      </a>
      {vagas && <p className="text-[12px] text-muted text-center mt-3"><strong className="text-white">{vagas.split(" ")[0]}</strong> {vagas.split(" ").slice(1).join(" ")}</p>}
    </div>
  </div>
);

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
          <div>
              <div className="font-mono-label text-[11px] tracking-[0.2em] uppercase text-gold mb-7 flex items-center gap-2.5 animate-fade-up-1">
                <span className="w-7 h-px bg-gold" />
                Proposta de Mentoria · 2026
              </div>
              <h1 className="font-display text-[clamp(44px,5.5vw,68px)] font-bold text-white leading-[1.1] mb-3 animate-fade-up-2">
                Inteligência Híbrida <em className="italic text-gold">Aplicada:</em> Fluência em IA
              </h1>
              <p className="font-display italic text-lg text-muted mb-8 animate-fade-up-3">IA que amplia. Humano que lidera.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 animate-fade-up-3">
                <div className="bg-surface border border-border-v rounded-[10px] px-6 py-5 text-sm text-foreground leading-relaxed">
                  Um programa que vai além do básico, não apenas para entender o que é Inteligência Artificial, mas para saber como ela se aplica na realidade do seu negócio, no seu trabalho ou no seu dia a dia, com clareza de onde partir e direção estratégica.
                </div>
                <div className="bg-surface border border-border-v rounded-[10px] px-6 py-5 text-sm text-foreground leading-relaxed">
                  Co-criar com IA é ampliar a inteligência humana, aprofundar conhecimentos e construir fluência real em IA. Na mentoria você terá um acompanhamento para usar IA como um recurso.
                </div>
              </div>

              {/* HERO CARD - horizontal */}
              <div className="bg-surface border border-border rounded-lg overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.4)] animate-fade-up-4 mt-8">
                <div className="grid grid-cols-2 md:grid-cols-[1fr_1fr_1fr_1fr_1fr] items-stretch">
                  <div className="px-6 py-5 border-b md:border-b-0 md:border-r border-border col-span-2 md:col-span-1 flex flex-col justify-center">
                    <div className="font-mono-label text-[10px] tracking-[0.2em] uppercase text-gold mb-1">Mentoria IH7</div>
                  </div>
                  {[
                    ["3", "Meses de duração"],
                    ["2×", "Encontros por mês"],
                    ["5", "Dimensões no diagnóstico de fluência"],
                    ["24h", "Retorno via WhatsApp direto"],
                  ].map(([num, label], i) => (
                    <div key={i} className="px-6 py-5 border-b md:border-b-0 md:border-r last:border-r-0 border-gold/[0.08] flex items-center gap-4 transition-colors hover:bg-gold-glow">
                      <div className="font-display text-[28px] font-bold text-gold leading-none">{num}</div>
                      <div className="font-mono-label text-[9px] tracking-[0.12em] uppercase text-muted max-w-[120px]">{label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-3.5 flex-wrap mt-11 animate-fade-up-4">
                <BtnGold href="#investimento">Ver modalidades</BtnGold>
                <BtnOutline href="#modulos">O que inclui</BtnOutline>
              </div>
          </div>
        </div>
      </section>

      <SectionSep />

      {/* SOBRE A MENTORA */}
      <section className="py-24 relative z-[1]">
        <div className="max-w-[1040px] mx-auto px-5 md:px-9">
          <SectionLabel>Sobre a Mentora</SectionLabel>
          <SectionTitle>Jenifer <em className="italic text-gold">Calvi</em></SectionTitle>
          <div className="space-y-5 text-sm text-foreground leading-relaxed max-w-[820px]">
            <p>
              Executiva de negócios e especialista em IA e inovação, com mais de 13 anos de experiência em educação digital e tecnologia. Atua na transformação da inteligência artificial em estratégia de crescimento por meio da Inteligência Híbrida, conectando capacidades humanas, dados e tecnologia para gerar resultados reais e escaláveis.
            </p>
            <p>
              Fundadora da <strong className="text-white">IH7 Educação Digital | IA para Negócios, Trabalho & Carreira</strong>. Mestre em Gestão do Conhecimento, com pesquisa em inteligência híbrida: cocriação humano-IA.
            </p>
            <p>
              Lidera iniciativas de inovação, tecnologia e IA aplicada. Como mentora, pesquisadora e educadora, promove a fluência em IA e apoia líderes, profissionais e organizações na adoção estratégica da IA, estruturando gestão do conhecimento, estratégia, GTM | operações de receita, transformação digital para impulsionar desenvolvimento, eficiência, crescimento e geração de valor.
            </p>
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
          <SectionTitle>Nossos <em className="italic text-gold">Entregáveis</em></SectionTitle>
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
              headline={`"Para quem não quer só aprender IA. Quer liderar com ela."`}
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