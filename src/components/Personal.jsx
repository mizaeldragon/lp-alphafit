const bullets = [
  'Acompanhamento de verdade',
  'Professores que sabem seu nome',
  'Um ambiente que te empurra pra frente',
  'Gente que se importa com você',
]

export default function Personal() {
  return (
    <section className="sec" id="personal">
      <div className="sec-tag">
        <span>Personal Trainer</span>
        <span className="num">06</span>
      </div>
      <div className="wrap">
        <div className="pt-grid reveal">

          {/* Linha 1 — foto esquerda, texto direita */}
          <div className="pt-cell pt-photo-a">
            <img src="/mulher-treina.png" alt="Aluna treinando na Alpha Fit" className="pt-img" />
            <div className="pt-badge">
              Sua taxa de personal
              <b>R$ 0,00</b>
            </div>
          </div>

          <div className="pt-cell pt-text-a">
            <span className="pt-eyebrow">EXCLUSIVIDADE ALPHA</span>
            <h3 className="pt-title">
              Um treino para<br />
              <span className="serif">cada jornada.</span>
            </h3>
            <p className="pt-desc">
              Não importa seu momento — a gente encontra o caminho com você. Personal incluído, sem taxa extra.
            </p>
            <a className="pt-btn" href="#aula-experimental">Começar agora →</a>
          </div>

          {/* Linha 2 — texto esquerda, foto direita */}
          <div className="pt-cell pt-text-b">
            <span className="pt-eyebrow">SUPORTE REAL</span>
            <h3 className="pt-title">
              Aqui, você não<br />
              <span className="serif">treina sozinho.</span>
            </h3>
            <ul className="pt-bullets">
              {bullets.map((b) => (
                <li key={b}>
                  <span className="pt-arrow">→</span>
                  {b}
                </li>
              ))}
            </ul>
            <a className="pt-btn" href="#aula-experimental">Começar agora →</a>
          </div>

          <div className="pt-cell pt-photo-b">
            <img src="/personal.png" alt="Personal Trainer" className="pt-img" />
          </div>

        </div>
      </div>
    </section>
  )
}
