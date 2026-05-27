import { useEffect, useRef } from 'react'

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    setTimeout(() => heroRef.current?.classList.add('in'), 100)
  }, [])

  useEffect(() => {
    const btns = document.querySelectorAll('.btn-magnet')
    const handlers = []
    btns.forEach((btn) => {
      const onMove = (e) => {
        const rect = btn.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2
        btn.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`
      }
      const onLeave = () => { btn.style.transform = '' }
      btn.addEventListener('mousemove', onMove)
      btn.addEventListener('mouseleave', onLeave)
      handlers.push({ btn, onMove, onLeave })
    })
    return () => handlers.forEach(({ btn, onMove, onLeave }) => {
      btn.removeEventListener('mousemove', onMove)
      btn.removeEventListener('mouseleave', onLeave)
    })
  }, [])

  return (
    <header className="hero" id="hero" ref={heroRef}>
      <div className="hero-bg-photo">
        <img src="/bg-hero.png" alt="" />
      </div>

      <div className="hero-grid">
        <div className="hero-meta">
          <span className="hero-meta-tag">
            <span className="pulse-dot" />
            Aula experimental · grátis · 5 unidades
          </span>
        </div>

        <h1 className="hero-headline">
          <span className="line">
            <span className="word" style={{ '--d': '.05s' }}>Onde</span>{' '}
            <span className="word" style={{ '--d': '.12s' }}>a</span>{' '}
            <span className="word serif gold" style={{ '--d': '.2s' }}>meta</span>
          </span>
          <span className="line">
            <span className="word" style={{ '--d': '.28s' }}>vira</span>{' '}
            <span className="word" style={{ '--d': '.35s' }}>evidência.</span>
          </span>
        </h1>

        <div className="hero-bottom">
          <p className="hero-sub">
            Academias premium no Maranhão. Equipamentos top de linha, ambiente climatizado,
            app com IA e acompanhamento real — sem fidelidade, sem taxa de cancelamento.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary btn-magnet" href="#aula-experimental">
              Agendar aula experimental
              <span className="arrow">
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 13 13 3M5 3h8v8" />
                </svg>
              </span>
            </a>
            <span className="micro">a partir de <b>R$ 90/mês</b> · sem cartão antes</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <span>Role para descobrir</span>
        <span className="scroll-line" />
      </div>
    </header>
  )
}
