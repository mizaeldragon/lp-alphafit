import { useState } from 'react'

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m5 12 5 5L20 7" />
    </svg>
  )
}

export default function CTAFinal() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="cta-final" id="cta">
      <span className="cta-final-eyebrow">
        <span className="ps" />
        Aula experimental · grátis
      </span>
      <h2>
        Tá pronto pra <span className="serif">virar</span> evidência?
      </h2>
      <p>
        Cadastre seu e-mail e a gente te liga em até 24h. Você sai do primeiro treino sabendo o próximo passo.
      </p>
      <form className="cta-form" onSubmit={onSubmit}>
        <input type="email" placeholder="seu@email.com" required />
        <button type="submit">
          {sent ? '✓ Recebido — em breve!' : 'Quero treinar →'}
        </button>
      </form>
      <div className="micros">
        <div><CheckIcon /> Sem compromisso</div>
        <div><CheckIcon /> Sem cobrança</div>
        <div><CheckIcon /> 7 dias para testar</div>
      </div>
    </section>
  )
}
