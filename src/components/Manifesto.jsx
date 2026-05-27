const cards = [
  {
    tag: 'CIMERIAN',
    title: 'Equipamentos',
    desc: 'Mais de 200 máquinas que atendem desde o iniciante até o Mr. Olympia.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="url(#mf-gold)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="17" width="6" height="6" rx="1.5" />
        <rect x="30" y="17" width="6" height="6" rx="1.5" />
        <line x1="10" y1="20" x2="15" y2="20" />
        <line x1="25" y1="20" x2="30" y2="20" />
        <rect x="15" y="14" width="10" height="12" rx="2" />
      </svg>
    ),
  },
  {
    tag: 'PERSONAL',
    title: 'Planos Populares',
    desc: 'Leve seus alunos para a Alpha Fit. Temos parceria com os planos populares.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="url(#mf-gold)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="14" cy="14" r="4" />
        <circle cx="26" cy="14" r="4" />
        <line x1="18" y1="14" x2="22" y2="14" />
        <path d="M8 32c0-5 3-8 6-8h12c3 0 6 3 6 8" />
      </svg>
    ),
  },
  {
    tag: 'PREMIUM',
    title: 'Modelo Internacional',
    desc: 'Unidades com +2.000m² de estrutura, 100% climatizadas e padrão constante.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="url(#mf-gold)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="18" width="28" height="16" rx="2" />
        <path d="M12 18V14a8 8 0 0 1 16 0v4" />
        <circle cx="20" cy="26" r="3" />
      </svg>
    ),
  },
  {
    tag: 'EXCLUSIVO',
    title: 'Aplicativo com IA',
    desc: 'Treino com inteligência artificial. Acompanhe seus resultados de qualquer lugar.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="url(#mf-gold)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="10" y="4" width="20" height="32" rx="3" />
        <line x1="10" y1="10" x2="30" y2="10" />
        <line x1="10" y1="30" x2="30" y2="30" />
        <path d="M16 20h2l2-4 2 8 2-4h2" />
      </svg>
    ),
  },
]

const GradDef = () => (
  <svg width="0" height="0" style={{ position: 'absolute' }}>
    <defs>
      <linearGradient id="mf-gold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffe600" />
        <stop offset="40%" stopColor="#ffc400" />
        <stop offset="100%" stopColor="#ff9d00" />
      </linearGradient>
    </defs>
  </svg>
)

export default function Manifesto() {
  return (
    <section className="sec" id="manifesto">
      <div className="sec-tag">
        <span>Estrutura</span>
        <span className="num">01</span>
      </div>
      <GradDef />
      <div className="wrap">
        <div className="sec-head reveal">
          <h2 className="sec-title">
            O que você vai <span className="serif gold">encontrar</span> na Alpha Fit.
          </h2>
        </div>

        <div className="mf-cards">
          {cards.map((c) => (
            <div key={c.tag} className="mf-card reveal">
              <div className="mf-icon">{c.icon}</div>
              <div className="mf-card-body">
                <span className="mf-tag">{c.tag}</span>
                <h3 className="mf-title">{c.title}</h3>
                <p className="mf-desc">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
