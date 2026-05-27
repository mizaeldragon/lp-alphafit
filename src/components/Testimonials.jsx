import { useRef, useState, useEffect } from 'react'

function Star() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M12 2l3 7 7 .5-5.5 5 2 7L12 17l-6.5 4.5 2-7L2 9.5 9 9z" />
    </svg>
  )
}

const testimonials = [
  {
    unit: 'Unidade Planalto',
    img: '/aluno-1.png',
    quote: '"Comecei sem foco. Em quatro meses mudei o corpo e a cabeça — o time da Alpha não te deixa parar."',
    name: 'Rishitah Lima',
    role: 'Aluna · plano MultiFit',
    result: '−12 KG',
  },
  {
    unit: 'Unidade Centro',
    img: '/aluno-2.png',
    quote: '"A IA do app muda o jogo. Recebo o treino certo no dia certo — força, cardio, mobility, tudo balanceado sem eu precisar pensar."',
    name: 'Nattasha Souza',
    role: 'Aluna · plano MultiFit',
    result: '+22% FORÇA',
  },
  {
    unit: 'Unidade Bacuri',
    img: '/aluno-3.png',
    quote: '"Treino em qualquer unidade com o mesmo plano. Climatizado de verdade, equipamento profissional, professor sempre presente."',
    name: 'Lucas Marques',
    role: 'Aluno · plano MultiFit',
    result: 'SUPINO 100KG',
  },
  {
    unit: 'Unidade Planalto',
    img: '/aluno-4.png',
    quote: '"Nunca pensei em pagar academia cara aqui em São Luís. A Alpha tem padrão internacional e o preço é acessível. Vale demais."',
    name: 'Fernanda Costa',
    role: 'Aluna · plano Mensal',
    result: '−8 KG',
  },
  {
    unit: 'Unidade Centro',
    img: '/aluno-5.png',
    quote: '"Personal sem taxa foi o que me fez fechar. Treino com acompanhamento todos os dias sem pagar nada extra. Isso não existe em outro lugar."',
    name: 'Rafael Almeida',
    role: 'Aluno · plano MultiFit',
    result: '+15% MASSA',
  },
]

export default function Testimonials() {
  const trackRef = useRef(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)
  const [activeIdx, setActiveIdx] = useState(0)

  const getCardWidth = () => {
    const card = trackRef.current?.firstElementChild
    return card ? card.offsetWidth + 16 : 376
  }

  const updateState = () => {
    const el = trackRef.current
    if (!el) return
    const cardW = getCardWidth()
    const idx = Math.min(Math.round(el.scrollLeft / cardW), testimonials.length - 1)
    setActiveIdx(idx)
    setCanPrev(el.scrollLeft > 4)
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 4)
  }

  const prev = () => trackRef.current?.scrollBy({ left: -getCardWidth(), behavior: 'smooth' })
  const next = () => trackRef.current?.scrollBy({ left: getCardWidth(), behavior: 'smooth' })

  const goTo = (idx) => {
    const el = trackRef.current
    if (!el) return
    const card = el.children[idx]
    if (card) el.scrollTo({ left: card.offsetLeft, behavior: 'smooth' })
  }

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    el.addEventListener('scroll', updateState, { passive: true })
    updateState()
    return () => el.removeEventListener('scroll', updateState)
  }, [])

  const ArrowIcon = ({ dir }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {dir === 'prev' ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 18l6-6-6-6" />}
    </svg>
  )

  return (
    <section className="sec">
      <div className="sec-tag">
        <span>Histórias reais</span>
        <span className="num">07</span>
      </div>
      <div className="wrap">
        <div className="sec-head center reveal">
          <h2 className="sec-title">
            Resultado <span className="serif gold">real</span> de gente real.
          </h2>
          <p className="sec-desc">
            Não tem antes-e-depois mágico. Tem método, suporte e disciplina. E muita gente que voltou
            ao espelho com outra postura.
          </p>
        </div>

        <div className="tests-carousel reveal">
          <div className="tests-track-wrap">
            <button className="tests-arrow tests-arrow-prev" onClick={prev} disabled={!canPrev} aria-label="Anterior">
              <ArrowIcon dir="prev" />
            </button>

            <div className="tests-track" ref={trackRef}>
              {testimonials.map((t) => (
                <article key={t.name} className="tcard">
                  <img src={t.img} alt={t.unit} className="tcard-img" />
                  <div className="tcard-content">
                    <div className="tcard-stars">
                      {[...Array(5)].map((_, i) => <Star key={i} />)}
                    </div>
                    <p className="tcard-quote">{t.quote}</p>
                    <div className="tcard-meta">
                      <div className="info">
                        <div className="nm">{t.name}</div>
                        <div className="rl">{t.role}</div>
                      </div>
                      <span className="result">{t.result}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <button className="tests-arrow tests-arrow-next" onClick={next} disabled={!canNext} aria-label="Próximo">
              <ArrowIcon dir="next" />
            </button>
          </div>

          <div className="tests-dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`tests-dot${activeIdx === i ? ' active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Ir para depoimento ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
