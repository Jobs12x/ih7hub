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

const frameworkModules = [
  {
    number: "01", tag: "Fundação Humana · EPOCH", title: "O que a IA nunca vai ter",
    short: "O que eu tenho que nenhum algoritmo replica?",
    content: (
      <>
        <ul className="flex flex-col gap-2.5 pt-6 list-none">
          {[
            ["E — Empatia:", "Conexão emocional genuína e escuta real"],
            ["P — Presença:", "Atenção plena e engajamento corporificado"],
            ["O — Opinião:", "Julgamento contextual e perspectiva própria"],
            ["C — Criatividade:", "Ruptura de padrões e inovação não-linear"],
            ["H — Hope:", "Liderança por esperança e visão de futuro"],
          ].map(([label, desc], i) => (
            <li key={i} className="text-sm text-foreground flex gap-3 items-start leading-relaxed">
              <span className="text-gold shrink-0 mt-0.5 text-[13px]">→</span>
              <span><strong className="text-white">{label}</strong> {desc}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 px-5 py-4 border-l-2 border-gold bg-gold-glow rounded-r-md text-[13px] text-muted italic">
          A pergunta não é "o que a IA pode fazer por mim?", é "o que eu preciso continuar fazendo para não perder o que me torna relevante?"
        </div>
      </>
    ),
  },
  {
    number: "02", tag: "Operação · Co-criação", title: "Como distribuir o trabalho",
    short: "O que delegar para a IA sem abrir mão do pensamento crítico?",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
        <div className="bg-gold-glow border border-border rounded-lg p-5">
          <div className="font-mono-label text-[9px] tracking-[0.15em] uppercase text-gold mb-2.5">✓ Delegue com segurança · Bloom 1–3</div>
          <ul className="flex flex-col gap-1.5 list-none">
            {["Síntese de grandes volumes", "Primeiras versões de textos", "Formatação e padronização", "Pesquisa exploratória", "Tarefas repetitivas"].map((t, i) => (
              <li key={i} className="text-xs text-foreground">→ {t}</li>
            ))}
          </ul>
        </div>
        <div className="bg-violet-dim border border-border-v rounded-lg p-5">
          <div className="font-mono-label text-[9px] tracking-[0.15em] uppercase text-violet mb-2.5">⊘ Retenha com rigor · Bloom 4–6</div>
          <ul className="flex flex-col gap-1.5 list-none">
            {["A hipótese inicial", "A curadoria do output", "O julgamento contextual", "A direção estratégica", "A responsabilidade pelo resultado"].map((t, i) => (
              <li key={i} className="text-xs text-foreground">→ {t}</li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
  {
    number: "03", tag: "Fluência · Bloom", title: "Em que nível você opera?",
    short: "Como evoluir de usuária passiva a pensadora estratégica?",
    content: (
      <>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-6">
          {[
            { level: "Nível 1 · Iniciante", title: "Gerar respostas", bloom: "Bloom 1–3", desc: "IA age quase sozinha. Pergunta genérica, resposta genérica, aceitação sem filtro crítico." },
            { level: "Nível 2 · Intermediário", title: "Refinar raciocínio", bloom: "Bloom 3–5", desc: "Usa IA para pensar melhor. Curadoria e direção ativas. Dialoga, não aceita passivamente." },
            { level: "Nível 3 · Avançado", title: "Novas perguntas", bloom: "Bloom 5–6", desc: "Usa IA para questionar e inovar. Pensamento insubstituível conduz a IA, não o contrário." },
          ].map((item, i) => (
            <div key={i} className={`bg-surface2 border rounded-lg p-5 ${i === 2 ? 'border-gold/30' : 'border-border-v'}`}>
              <div className={`font-mono-label text-[9px] tracking-[0.12em] uppercase mb-2 ${i === 2 ? 'text-gold' : 'text-muted'}`}>{item.level}</div>
              <div className="font-display text-base font-semibold text-white mb-1.5">{item.title}</div>
              <div className="text-[11px] text-gold italic mb-2">{item.bloom}</div>
              <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-5 px-5 py-4 border-l-2 border-gold bg-gold-glow rounded-r-md text-[13px] text-muted italic">
          Fluência não é usar mais IA. É saber onde você precisa pensar mais, não menos.
        </div>
      </>
    ),
  },
];

const PlanCard = ({ badge, price, tagline, features, featured = false }: {
  badge: string; price: string; tagline: string; features: string[]; featured?: boolean;
}) => (
  <div className={`bg-surface border rounded-lg p-9 relative overflow-hidden transition-colors ${featured ? 'border-border bg-gradient-to-br from-[#231847] to-[#1a1238]' : 'border-border-v hover:border-border'}`}>
    {featured && <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />}
    <div className="font-mono-label text-[9px] tracking-[0.2em] uppercase text-gold mb-5 flex items-center gap-1.5">{badge}</div>
    <div className="font-display text-[38px] font-bold text-white tracking-tight mb-1.5">{price}</div>
    <div className="font-display italic text-[15px] text-muted mb-8">{tagline}</div>
    <div className="h-px bg-border mb-7" />
    <div className="font-mono-label text-[9px] tracking-[0.15em] uppercase text-gold mb-3.5">Entregáveis</div>
    <ul className="flex flex-col gap-[11px] list-none">
      {features.map((f, i) => (
        <li key={i} className="text-[13px] text-foreground flex gap-2.5 items-start leading-snug">
          <span className="text-gold font-bold shrink-0 mt-0.5">✓</span>{f}
        </li>
      ))}
    </ul>
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
          {[["#sobre", "Framework"], ["#modulos", "Conteúdo"], ["#investimento", "Investimento"], ["#teste", "Diagnóstico"], ["https://wa.me/5544991388809", "Contato"]].map(([href, label]) => (
            <li key={href}><a href={href} className="text-[13px] font-medium text-muted tracking-[0.05em] uppercase no-underline transition-colors hover:text-gold">{label}</a></li>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { tag: "Executivas & Gestoras", title: "Liderança com IA", desc: "Que querem incorporar IA nas suas decisões, equipes e estratégias com fundamento — não por moda." },
              { tag: "Reposicionamento", title: "Diferenciação de Carreira", desc: "Profissionais que buscam se diferenciar no mercado usando IA com clareza de propósito e direção." },
              { tag: "Inovação & Consultoria", title: "Líderes de Inovação", desc: "Consultores e líderes que precisam estruturar diagnósticos e planos de adoção de IA nas suas organizações." },
              { tag: "Mulheres & IA", title: "Autonomia Estratégica", desc: "Que querem usar IA como alavanca estratégica para crescer na carreira e nos negócios com autonomia real." },
            ].map((item, i) => (
              <div key={i} className="group bg-surface border border-border-v rounded-lg px-8 py-7 relative overflow-hidden transition-all hover:border-border hover:bg-surface2">
                <div className="absolute top-0 left-0 w-[3px] h-0 bg-gold rounded transition-all duration-400 group-hover:h-full" />
                <div className="font-mono-label text-[9px] tracking-[0.2em] uppercase text-gold mb-2.5">{item.tag}</div>
                <div className="font-display text-[17px] font-semibold text-white mb-2">{item.title}</div>
                <p className="text-[13px] text-foreground leading-relaxed">{item.desc}</p>
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

      {/* INVESTIMENTO */}
      <section id="investimento" className="py-24 relative z-[1]">
        <div className="max-w-[1040px] mx-auto px-5 md:px-9">
          <SectionLabel>03 — Investimento</SectionLabel>
          <SectionTitle>Escolha Sua <em className="italic text-gold">Modalidade</em></SectionTitle>
          <p className="text-[13px] text-muted mb-3">Duração: 5 meses · 2 encontros por mês · parcelado ou à vista</p>

          {/* Trabalho & Negócios */}
          <div className="font-mono-label text-[10px] tracking-[0.2em] uppercase text-gold pt-5 pb-3 flex items-center gap-3">
            <span className="w-6 h-px bg-gold inline-block" />
            Trabalho &amp; Negócios — Coletiva ou Individual
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
            <PlanCard badge="Coletiva · Online" price="R$ 599" tagline="Grupo pequeno · 2 encontros/mês"
              features={["Diagnóstico de maturidade em IA personalizado","Relatório com nível de maturidade e plano de ação","Módulo completo de inteligência híbrida aplicada","Stack de ferramentas de IA selecionada para o seu contexto","2 sessões online ao vivo por mês, em grupo reduzido","Gravações de todas as sessões","Acesso ao WhatsApp da mentora (dias úteis, até 24h)"]}
            />
            <PlanCard badge="✦ Coletiva · Ao Vivo" price="R$ 899" tagline="Grupo pequeno · 2 encontros/mês" featured
              features={["Diagnóstico de maturidade em IA personalizado","Relatório com nível de maturidade e plano de ação","Módulo completo de inteligência híbrida aplicada","Stack de ferramentas de IA selecionada para o seu contexto","2 encontros presenciais ao vivo por mês, em grupo reduzido","Gravações de todas as sessões","Acesso ao WhatsApp da mentora (dias úteis, até 24h)"]}
            />
          </div>

          {/* Carreira */}
          <div className="font-mono-label text-[10px] tracking-[0.2em] uppercase text-gold pt-5 pb-3 flex items-center gap-3">
            <span className="w-6 h-px bg-gold inline-block" />
            Carreira — Individual
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <PlanCard badge="Individual · Online" price="R$ 1.200" tagline="Atendimento exclusivo · 2 encontros/mês"
              features={["Diagnóstico de maturidade em IA aprofundado, com foco no seu contexto de carreira","Relatório personalizado com plano de ação revisado","Módulo completo de inteligência híbrida aplicada","Stack de ferramentas de IA selecionada para o seu contexto","2 sessões individuais online por mês, exclusivas com Jenifer","Gravações de todas as sessões","Prioridade de resposta no WhatsApp (dias úteis, até 24h)"]}
            />
            <PlanCard badge="✦ Individual · Presencial" price="R$ 1.550" tagline="Atendimento exclusivo · 2 encontros/mês" featured
              features={["Diagnóstico de maturidade em IA aprofundado, com foco no seu contexto de carreira","Relatório personalizado com plano de ação revisado","Módulo completo de inteligência híbrida aplicada","Stack de ferramentas de IA selecionada para o seu contexto","2 encontros presenciais individuais por mês, exclusivos com Jenifer","Gravações de todas as sessões","Prioridade de resposta no WhatsApp (dias úteis, até 24h)"]}
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

      {/* IH-CORE FRAMEWORK */}
      <section id="framework" className="py-24 relative z-[1]">
        <div className="max-w-[1040px] mx-auto px-5 md:px-9">
          <SectionLabel>05 — Framework</SectionLabel>
          <SectionTitle>IH-CORE: Co-criação <em className="italic text-gold">Humano-IA</em></SectionTitle>
          <p className="text-sm text-muted mb-14 max-w-[560px]">O framework de ensino que estrutura a mentoria. Três camadas integradas que desenvolvem sua fluência em inteligência híbrida.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
            {[
              { num: "01", tag: "Fundação Humana · EPOCH", title: "O que a IA nunca vai ter", desc: "Empatia, Presença, Opinião, Criatividade e Hope, as cinco habilidades insubstituíveis que definem seu valor profissional." },
              { num: "02", tag: "Operação · Co-criação", title: "Como distribuir o trabalho", desc: "Processos, IN, IH, IA e Ferramentas, os cinco eixos em que a inteligência híbrida opera na prática." },
              { num: "03", tag: "Fluência · Bloom", title: "Em que nível você opera?", desc: "Da geração de respostas à criação de novas perguntas, um mapa de evolução cognitiva baseado na Taxonomia de Bloom." },
            ].map((item, i) => (
              <div key={i} className="bg-surface border border-border-v rounded-lg p-7 transition-all">
                <div className="font-display text-[52px] font-bold italic text-gold/15 leading-none mb-4">{item.num}</div>
                <div className="font-mono-label text-[9px] tracking-[0.2em] uppercase text-gold mb-2.5">{item.tag}</div>
                <div className="font-display text-lg font-semibold text-white mb-3">{item.title}</div>
                <p className="text-[13px] text-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <ModuleAccordion modules={frameworkModules} />
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
