const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const GITHUB_PAT = Deno.env.get('GITHUB_PAT')
    if (!GITHUB_PAT) throw new Error('GITHUB_PAT is not configured')

    const GITHUB_REPO = 'Jobs12x/Forma-o-IA'

    const { score, level, classification, answers, contact } = await req.json()

    if (typeof score !== 'number' || !level || !classification || !Array.isArray(answers)) {
      return new Response(JSON.stringify({ error: 'Invalid input' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    // Validate contact
    const name = typeof contact?.name === 'string' ? contact.name.trim() : ''
    const whatsapp = typeof contact?.whatsapp === 'string' ? contact.whatsapp.trim() : ''
    const email = typeof contact?.email === 'string' ? contact.email.trim() : ''

    if (!name || name.length < 2 || name.length > 100) {
      return new Response(JSON.stringify({ error: 'Invalid name' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255) {
      return new Response(JSON.stringify({ error: 'Invalid email' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }
    if (whatsapp.replace(/\D/g, '').length < 10 || whatsapp.length > 20) {
      return new Response(JSON.stringify({ error: 'Invalid whatsapp' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    const now = new Date().toISOString()
    const answersFormatted = answers
      .map((a: number, i: number) => `- Pergunta ${i + 1}: Opção ${['A', 'B', 'C'][a - 1]} (${a} pts)`)
      .join('\n')

    const body = `## Resultado do Diagnóstico de Fluência em IA

**Data:** ${now}
**Pontuação:** ${score}/36
**Nível:** ${level}
**Classificação:** ${classification}

### Contato
- **Nome:** ${name}
- **WhatsApp:** ${whatsapp}
- **E-mail:** ${email}

### Respostas detalhadas
${answersFormatted}
`

    const response = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/issues`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GITHUB_PAT}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
        'User-Agent': 'IH7-Diagnostico',
      },
      body: JSON.stringify({
        title: `[Diagnóstico] ${name} — ${level} (${score}/36) — ${now.split('T')[0]}`,
        body,
        labels: ['diagnóstico', level.toLowerCase().replace(' ', '-')],
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(`GitHub API error [${response.status}]: ${JSON.stringify(data)}`)
    }

    return new Response(JSON.stringify({ success: true, issueUrl: data.html_url }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  } catch (error: unknown) {
    console.error('Error creating GitHub issue:', error)
    const message = error instanceof Error ? error.message : 'Unknown error'
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})
