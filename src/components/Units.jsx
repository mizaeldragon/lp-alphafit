function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 13 13 3M5 3h8v8" />
    </svg>
  )
}

const units = [
  {
    id: '01',
    name: 'Planalto',
    serif: true,
    loc: 'Av. da Imperatriz, 24 · Imperatriz, MA',
    size: '1.200 m²',
    hours: '05:30 → 23:00',
    big: true,
    delay: '0s',
    img: '/alphafit-planalto.png',
  },
  {
    id: '02',
    name: 'Centro',
    loc: 'R. Luís Domingues, 1024',
    delay: '.08s',
    img: '/alphafit-centro.jpg',
  },
  {
    id: '03',
    name: 'Pedro Sá',
    loc: 'Av. Pedro Neiva, 380',
    delay: '.16s',
    img: '/alphafit-pedroneiva.jpg',
  },
  {
    id: '04',
    name: 'Bacuri',
    loc: 'R. Bahia, 2100',
    delay: '.24s',
    img: '/alphafit-bacuri.jpg',
  },
  {
    id: '05',
    name: 'Açailândia',
    loc: 'Av. Dom Afonso, 1500',
    goldDot: true,
    delay: '.32s',
    img: '/alphafit-acailandia.jpg',
  },
]

export default function Units() {
  return (
    <section className="sec" id="unidades">
      <div className="sec-tag">
        <span>Unidades</span>
        <span className="num">04</span>
      </div>
      <div className="wrap">
        <div className="sec-head center reveal">
          <h2 className="sec-title">
            Cinco endereços. <span className="serif gold">Uma alpha.</span>
          </h2>
          <p className="sec-desc">
            Mesmo padrão Cinemax, climatizado e personal sem taxa em qualquer unidade. Plano MultiFit libera tudo.
          </p>
        </div>

        <div className="units-mosaic">
          {units.map((u) => (
            <a key={u.id} className={`unit-tile${u.big ? ' big' : ''} reveal`} style={{ '--rd': u.delay }} href="#">
              <img src={u.img} alt={u.name} className="unit-img" />
              <span className="top-tag">
                <span className="dot" />
                aberta{u.big ? ' agora' : ''}
              </span>
              <div className="unit-content">
                <div className="num">— {u.id} / MA</div>
                <div className={u.big ? 'nm big' : 'nm'}>
                  {u.name}
                  {u.serif && <span className="serif">.</span>}
                  {u.goldDot && <span className="serif" style={{ color: 'var(--gold)', fontStyle: 'italic' }}>.</span>}
                </div>
                <div className="loc">{u.loc}</div>
                {u.big && (
                  <div className="meta">
                    <span>{u.hours} · {u.size}</span>
                    <span className="arrow"><ArrowIcon /></span>
                  </div>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
