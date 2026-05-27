function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 13 13 3M5 3h8v8" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m5 12 5 5L20 7" />
    </svg>
  )
}

export default function Bento() {
  return (
    <section className="sec" id="diferenca">
      <div className="sec-tag">
        <span>O que faz diferença</span>
        <span className="num">02</span>
      </div>
      <div className="wrap">
        <div className="sec-head center reveal">
          <h2 className="sec-title">
            A <span className="serif gold">diferença</span> está nos detalhes — não no marketing.
          </h2>
          <p className="sec-desc">
            Seis razões que fazem nossos alunos voltarem e indicarem. Tudo o que importa, nada que sobra.
          </p>
        </div>

        <div className="bento">
          <div className="bento-cell b-1 with-num reveal">
            <span className="b-num">— 01</span>
            <div className="big-num">R$ 90</div>
            <div className="big-num-cents">,00 / mês</div>
            <div className="b-title">Acessível — <span className="serif">de verdade.</span></div>
            <p className="b-desc">
              Comece a treinar a partir de R$ 90/mês, sem fidelidade. O Evolution é desenhado pra caber,
              e o MultiFit é o melhor custo-benefício da região por todas as unidades + IA + personal sem taxa.
            </p>
            <div className="b-bottom">
              <span>Plano · Evolution</span>
              <span className="arrow"><ArrowIcon /></span>
            </div>
          </div>

          <div className="bento-cell b-2 with-photo reveal" style={{ '--rd': '.08s' }}>
            <img src="/alphafit-planalto.png" alt="Unidade Planalto" className="bento-photo" />
            <span className="b-num">— 02</span>
            <div className="b-content">
              <div className="b-title">5 unidades. <span className="serif">Mesma alpha.</span></div>
              <p className="b-desc">Treine onde quiser no Maranhão.</p>
            </div>
            <div className="b-bottom" style={{ position: 'absolute', bottom: 0, right: '24px', zIndex: 3, padding: '0 0 24px' }}>
              <span className="arrow"><ArrowIcon /></span>
            </div>
          </div>

          <div className="bento-cell b-3 reveal" style={{ '--rd': '.12s' }}>
            <span className="b-num">— 03</span>
            <div className="b-title">Cinemax</div>
            <p className="b-desc">200+ máquinas, manutenção diária. Padrão de redes internacionais.</p>
          </div>

          <div className="bento-cell b-4 reveal" style={{ '--rd': '.16s' }}>
            <span className="b-num">— 04</span>
            <div className="b-title">Climatizado</div>
            <p className="b-desc">100% do ambiente. Sem perder ritmo no calor de Imperatriz.</p>
          </div>

          <div className="bento-cell b-5 reveal" style={{ '--rd': '.2s' }}>
            <span className="b-num">— 05</span>
            <div className="b-title">Personal <span className="serif">sem taxa.</span></div>
            <p className="b-desc">Sua taxa: R$ 0,00. Sala exclusiva, biblioteca pronta.</p>
          </div>

          <div className="bento-cell b-6 with-num reveal" style={{ '--rd': '.24s' }}>
            <span className="b-num">— 06</span>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', flexWrap: 'wrap' }}>
              <div className="big-num" style={{ fontSize: 'clamp(48px, 6vw, 96px)' }}>IA</div>
              <div className="b-title" style={{ fontSize: 'clamp(20px, 2vw, 30px)' }}>
                <span className="serif">App Alpha</span> · treino que aprende com você.
              </div>
            </div>
            <p className="b-desc" style={{ marginTop: '8px' }}>
              A IA monta seu plano semanal, ajusta carga e repetições com base na sua execução.
              Check-in por QR em qualquer unidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
