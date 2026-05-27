import { useState } from 'react'

const units = [
  'Planalto',
  'Centro',
  'Pedro Neiva',
  'Bacuri',
  'Açailândia',
]

const times = [
  'Manhã (05h–12h)',
  'Tarde (12h–18h)',
  'Noite (18h–23h)',
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', unit: '', time: '' })
  const [sent, setSent] = useState(false)

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const maskPhone = (v) => {
    const digits = v.replace(/\D/g, '').slice(0, 11)
    if (digits.length <= 2) return digits.replace(/^(\d{0,2})/, '($1')
    if (digits.length <= 6) return digits.replace(/^(\d{2})(\d{0,4})/, '($1) $2')
    if (digits.length <= 10) return digits.replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3')
    return digits.replace(/^(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const msg = `Olá! Quero agendar uma aula experimental.%0ANome: ${form.name}%0ATelefone: ${form.phone}%0AUnidade: ${form.unit}%0AHorário preferido: ${form.time}`
    window.open(`https://wa.me/559985332667?text=${msg}`, '_blank')
    setSent(true)
  }

  return (
    <section className="sec" id="aula-experimental">
      <div className="sec-tag">
        <span>Aula Experimental</span>
        <span className="num">08</span>
      </div>
      <div className="wrap">
        <div className="contact-grid reveal">

          {/* Esquerda — texto */}
          <div>
            <span className="contact-eyebrow">100% GRATUITA · SEM COMPROMISSO</span>
            <h2 className="contact-title">
              Vem treinar uma vez.<br />
              <span className="serif gold">Você vai querer voltar.</span>
            </h2>
            <p className="contact-desc">
              Escolhe a unidade, o horário que te cabe, e a gente cuida do resto. Primeiro treino por conta da Alpha.
            </p>
            <ul className="contact-bullets">
              <li><span className="cb-arrow">→</span> Sem cartão de crédito</li>
              <li><span className="cb-arrow">→</span> Sem assinar nada</li>
              <li><span className="cb-arrow">→</span> Professor presente do início ao fim</li>
              <li><span className="cb-arrow">→</span> Acesso a todos os equipamentos</li>
            </ul>
          </div>

          {/* Direita — formulário */}
          <div className="contact-form-wrap">
            {sent ? (
              <div className="contact-success">
                <span className="contact-success-icon">✓</span>
                <h3>Perfeito! Redirecionando para o WhatsApp…</h3>
                <p>Confirma a mensagem e a gente responde em minutos.</p>
                <button className="btn btn-primary" onClick={() => setSent(false)}>
                  Agendar outra aula
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="cf-head">
                  <h3 className="cf-title">Agendar aula experimental</h3>
                  <p className="cf-sub">Preenche em 30 segundos</p>
                </div>

                <div className="cf-field">
                  <label className="cf-label">Seu nome</label>
                  <input
                    className="cf-input"
                    type="text"
                    placeholder="Como você quer ser chamado?"
                    value={form.name}
                    onChange={e => set('name', e.target.value)}
                    required
                  />
                </div>

                <div className="cf-field">
                  <label className="cf-label">WhatsApp</label>
                  <input
                    className="cf-input"
                    type="tel"
                    placeholder="(99) 9 0000-0000"
                    value={form.phone}
                    onChange={e => set('phone', maskPhone(e.target.value))}
                    required
                  />
                </div>

                <div className="cf-row">
                  <div className="cf-field">
                    <label className="cf-label">Unidade</label>
                    <select
                      className="cf-input cf-select"
                      value={form.unit}
                      onChange={e => set('unit', e.target.value)}
                      required
                    >
                      <option value="">Escolher unidade</option>
                      {units.map(u => <option key={u} value={u}>{u}</option>)}
                    </select>
                  </div>

                  <div className="cf-field">
                    <label className="cf-label">Turno preferido</label>
                    <select
                      className="cf-input cf-select"
                      value={form.time}
                      onChange={e => set('time', e.target.value)}
                      required
                    >
                      <option value="">Escolher turno</option>
                      {times.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>

                <button type="submit" className="cf-submit">
                  Agendar pelo WhatsApp →
                </button>
                <p className="cf-note">Respondemos em até 5 minutos em horário comercial.</p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
