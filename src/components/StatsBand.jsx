import { useEffect, useRef } from 'react'

function StatItem({ target, suffix, label, meta, format, delay }) {
  const numRef = useRef(null)

  useEffect(() => {
    const el = numRef.current
    if (!el) return

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return
          const dur = 1800
          const start = performance.now()
          const tick = (now) => {
            const t = Math.min((now - start) / dur, 1)
            const eased = 1 - Math.pow(1 - t, 3)
            let v = target * eased
            let display
            if (format === 'k') {
              display = (v / 1000).toFixed(t === 1 ? 0 : 1) + 'K'
            } else if (target >= 1000) {
              display = Math.round(v).toLocaleString('pt-BR')
            } else {
              display = Math.round(v)
            }
            el.textContent = display
            if (t < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
          io.unobserve(el)
        })
      },
      { threshold: 0.5 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [target, format])

  return (
    <div className="stat-item reveal" style={{ '--rd': delay }}>
      <div className="v">
        <span ref={numRef}>0</span>
        <span className="suffix">{suffix}</span>
      </div>
      <div className="l">{label}</div>
      <div className="meta">{meta}</div>
    </div>
  )
}

export default function StatsBand() {
  return (
    <section className="stats-band">
      <div className="stats-grid">
        <StatItem target={5} suffix="+" label="Unidades ativas" meta="no Maranhão" delay="0s" />
        <StatItem target={2760} suffix="+" label="Alunos ativos" meta="e contando" delay=".1s" />
        <StatItem target={9000} suffix="+" label="Comunidade IG" meta="@alphafit.br" format="k" delay=".2s" />
        <StatItem target={98} suffix="%" label="Satisfação Google" meta="4.9 / 5 estrelas" delay=".3s" />
      </div>
    </section>
  )
}
