import { useEffect, useRef } from 'react'

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m5 12 5 5L20 7" />
    </svg>
  )
}

export default function AppSection() {
  const phoneRef = useRef(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const phone = phoneRef.current
    const section = sectionRef.current
    if (!phone || !section) return

    const onMove = (e) => {
      const rect = section.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      phone.style.transform = `rotateY(${x * 14}deg) rotateX(${-y * 10}deg) translateZ(20px)`
    }
    const onLeave = () => { phone.style.transform = '' }

    section.addEventListener('mousemove', onMove)
    section.addEventListener('mouseleave', onLeave)
    return () => {
      section.removeEventListener('mousemove', onMove)
      section.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <section className="sec" id="app">
      <div className="sec-tag">
        <span>App Alpha · IA</span>
        <span className="num">05</span>
      </div>
      <div className="wrap">
        <div className="app-section reveal" ref={sectionRef}>
          <div className="app-content">
            <div className="eyebrow-row">
              <span className="eyebrow">EXCLUSIVO · APP ALPHA</span>
              <div className="eline" />
            </div>
            <h3>Treino com <span className="serif">IA</span> que aprende com você.</h3>
            <p>
              A inteligência artificial monta seu plano semanal, ajusta carga e repetições com base
              na sua execução, e te avisa quando bater o próximo PR.
            </p>
            <ul>
              <li><CheckIcon /> Planos semanais ajustados pela sua performance real</li>
              <li><CheckIcon /> Check-in por QR — entre em qualquer unidade</li>
              <li><CheckIcon /> Gráficos de evolução, metas mensais, lembrete de PR</li>
              <li><CheckIcon /> Tira-dúvidas com IA 24/7 — execução, dieta, recuperação</li>
            </ul>
          </div>

          <div className="app-visual">
            <div className="app-phone-img" ref={phoneRef}>
              <img src="/img-IA.png" alt="App Alpha Fit com IA" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
