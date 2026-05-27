import { useState } from 'react'

const items = [
  {
    num: '01',
    q: 'Posso trancar minha mensalidade?',
    a: 'Sim — 1 vez por mês, por até 30 dias, direto pelo app ou WhatsApp. Sem multa, sem letra miúda. Volta no clique.',
  },
  {
    num: '02',
    q: 'Existe taxa de cancelamento?',
    a: 'Zero taxa. Sem fidelidade, sem multa. Cancele pelo app — sem ligação, sem retenção. A Alpha confia no seu resultado, não em amarra contratual.',
  },
  {
    num: '03',
    q: 'Como funciona a aula experimental?',
    a: '100% gratuita, dura ~1h. Você faz check-in, conhece a unidade, recebe orientação inicial e treina sem compromisso. Pra agendar, o formulário no fim da página.',
  },
  {
    num: '04',
    q: 'Posso treinar em qualquer unidade?',
    a: 'Com o MultiFit, sim — acesso liberado a todas as 5 unidades. Evolution é unidade fixa, com upgrade simples a qualquer momento, sem multa.',
  },
  {
    num: '05',
    q: 'Tem personal trainer disponível?',
    a: 'Sim — professores em sala em todos os horários (inclusos). Personal externo também pode acompanhar com taxa zero. Sala exclusiva pra acompanhamento.',
  },
  {
    num: '06',
    q: 'Vocês têm plano família?',
    a: 'Sim — desconto progressivo a partir do 2º dependente. Fala com a gente no WhatsApp pra fazer a conta certinha pra sua família.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  const toggle = (i) => setOpen(open === i ? null : i)

  return (
    <section className="sec" id="faq">
      <div className="sec-tag">
        <span>FAQ</span>
        <span className="num">09</span>
      </div>
      <div className="wrap">
        <div className="faq-wrap">
          <div className="faq-side reveal">
            <h3 className="h">
              Tira a dúvida e <span className="serif">vem treinar.</span>
            </h3>
            <p className="d">
              Sem letra miúda. Se faltar algo, fala com a gente — a gente responde rápido, sem script.
            </p>
            <div className="faq-side-img">
              <img src="/homem-treina.png" alt="Aluno treinando na Alpha Fit" />
            </div>
          </div>

          <div className="faq-items reveal">
            {items.map((item, i) => (
              <div key={i} className={`faq-item${open === i ? ' open' : ''}`}>
                <button className="faq-q" onClick={() => toggle(i)}>
                  <span className="num">{item.num}</span>
                  <span className="qt">{item.q}</span>
                  <span className="faq-toggle">
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M3 8h10M8 3v10" />
                    </svg>
                  </span>
                </button>
                <div className="faq-a">
                  <div className="faq-a-inner">{item.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
