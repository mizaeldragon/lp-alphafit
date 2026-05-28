import { useState } from 'react'

function Check() {
  return (
    <svg viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="10" fill="rgba(255,214,10,0.15)" />
      <path d="m5.5 10 3 3 6-6" stroke="#ffd60a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const plans = [
  {
    id: 'Evolution',
    label: 'Single · 1 unidade',
    annual:  { price: '90',  cents: ',00' },
    monthly: { price: '109', cents: ',90' },
    desc: 'Pra começar do jeito certo. Unidade fixa, equipamentos top, app com tracking.',
    features: [
      'Seg a Sex das 05:00 às 23:00',
      'Ambiente 100% climatizado',
      'Equipamentos Cimerian',
      'Zero Taxa de Cancelamento',
    ],
    cta: 'Começar com Evolution',
    featured: false,
  },
  {
    id: 'MultiFit',
    label: 'Full Access · 5 unidades',
    annual:  { price: '129', cents: ',99' },
    monthly: { price: '139', cents: ',90' },
    desc: 'Acesso ilimitado a todas as 5 unidades, IA no app e personal sem taxa.',
    features: [
      'Acesso total às unidades',
      'Ambiente 100% climatizado',
      'Equipamentos Cimerian',
      'Treinos personalizados',
      'Zero Taxa de Cancelamento',
    ],
    cta: 'Quero o MultiFit',
    featured: true,
    badge: 'MAIS ESCOLHIDO',
  },
  {
    id: 'Alpha VIP',
    label: 'VIP · Sem limites',
    annual:  { price: '159', cents: ',90' },
    monthly: { price: '159', cents: ',90' },
    desc: 'A experiência máxima Alpha Fit. Personal exclusivo, nutricionista e acesso total.',
    features: [
      'Acesso total às unidades',
      'Ambiente 100% climatizado',
      'Equipamentos Cimerian',
      'Treinos personalizados',
      'Personal exclusivo',
      'Acompanhamento nutricional',
      'Zero Taxa de Cancelamento',
    ],
    cta: 'Quero o Alpha VIP',
    featured: false,
    badge: 'PREMIUM',
  },
]

export default function Plans() {
  const [isAnnual, setIsAnnual] = useState(true)

  return (
    <section className="sec" id="planos">
      <div className="sec-tag">
        <span>Planos</span>
        <span className="num">03</span>
      </div>
      <div className="wrap">
        <div className="plans-head reveal">
          <h2 className="sec-title">
            Mensalidade fixa. <span className="serif gold">Sem surpresa.</span>
          </h2>
          <p className="sec-desc">
            Escolha o plano que faz sentido. Cancele quando quiser, sem multa.
          </p>
        </div>

        <div className="plans-toggle reveal">
          <button
            className={`plans-toggle-btn${!isAnnual ? ' active' : ''}`}
            onClick={() => setIsAnnual(false)}
          >
            Mensal
          </button>
          <button
            className={`plans-toggle-btn${isAnnual ? ' active' : ''}`}
            onClick={() => setIsAnnual(true)}
          >
            Anual <span className="plans-toggle-save">Economize</span>
          </button>
        </div>

        <div className="plans-grid">
          {plans.map((p) => {
            const price = isAnnual ? p.annual : p.monthly
            return (
              <article key={p.id} className={`pcard reveal${p.featured ? ' pcard-featured' : ''}`}>
                {p.badge && <span className="pcard-badge">{p.badge}</span>}

                <div className="pcard-top">
                  <div className="pcard-label">{p.label}</div>
                  <h3 className="pcard-name">{p.id}</h3>

                  <div className="pcard-price">
                    <span className="pcard-cur">R$</span>
                    <span className="pcard-val">{price.price}</span>
                    <div className="pcard-right">
                      <span className="pcard-cents">{price.cents}</span>
                      <span className="pcard-per">/mês</span>
                    </div>
                  </div>
                  <p className="pcard-desc">{p.desc}</p>
                </div>

                <div className="pcard-divider" />

                <ul className="pcard-features">
                  {p.features.map((f) => (
                    <li key={f}>
                      <Check />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="pcard-footer">
                  <button className={`pcard-cta${p.featured ? ' pcard-cta-gold' : ''}`}>
                    {p.cta} →
                  </button>
                  <span className="pcard-note">
                    {isAnnual ? 'Cobrado anualmente · cancele quando quiser' : 'Pagamento mensal · cancele quando quiser'}
                  </span>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
