const stats = [
  { value: '5', label: 'Unidades Ativas' },
  { value: '2.760+', label: 'Alunos treinando' },
  { value: '11', label: 'Unidades previstas até 2027' },
  { value: '90%', label: 'Avaliações positivas' },
]

export default function About() {
  return (
    <section className="sec" id="sobre">
      <div className="sec-tag">
        <span>Sobre a Alpha Fit</span>
        <span className="num">00</span>
      </div>
      <div className="wrap">
        <div className="about-grid reveal">

          <div className="about-visual">
            <div className="about-card-wrap">
              <div className="about-logo-card">
                <img src="/alphafit-centro.jpg" alt="Unidade Centro" className="about-unit-img" />
              </div>
              <div className="about-badge">
                <div className="about-badge-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="about-badge-info">
                  <span className="about-badge-value">2.760+</span>
                  <span className="about-badge-label">ALUNOS</span>
                </div>
              </div>
            </div>
          </div>

          <div className="about-content">
            <div className="about-top">
              <h2 className="about-title">
                Aqui a meta <span className="serif gold">vira resultado.</span>
              </h2>
              <p className="about-desc">
                A <strong>Alpha Fit</strong> existe para transformar vidas no Maranhão. Com ambientes
                de alto padrão, equipamentos Cinemax de ponta, personal sem taxa e um app com
                inteligência artificial — entregamos tudo que você precisa para evoluir, sem
                desculpa.
              </p>
            </div>

            <div className="about-stats">
              {stats.map((s) => (
                <div key={s.label} className="about-stat">
                  <span className="about-stat-value">{s.value}</span>
                  <span className="about-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
