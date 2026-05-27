export default function Footer() {
  return (
    <footer>
      <div className="footer-big">
        <svg className="footer-big-svg" viewBox="0 0 1000 160" aria-label="ALPHA fit" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="fb-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffe600" />
              <stop offset="40%" stopColor="#ffc400" />
              <stop offset="100%" stopColor="#ff9d00" />
            </linearGradient>
          </defs>
          <text
            x="50%"
            y="82%"
            textAnchor="middle"
            fill="none"
            stroke="url(#fb-grad)"
            strokeWidth="1"
            className="footer-big-text"
          >ALPHA FIT</text>
        </svg>
      </div>

      <div className="footer-grid">
        <div className="footer-brand">
          <a className="logo" href="/">
            <img src="/logo-alphafit.png" alt="Alpha Fit" className="logo-img" />
          </a>
          <p>Academias premium do Maranhão. Resultado real em ambiente premium — sem rodeios, sem desculpas.</p>
          <div className="footer-social">
            <a href="https://www.instagram.com/alphafitacademia/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href="https://wa.me/559985332667" target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a10 10 0 0 1 8.72 14.9L22 22l-5.1-1.28A10 10 0 1 1 12 2z" />
                <path d="M8.5 9.5c.5 1 1.2 2 2 2.8.8.8 1.8 1.5 2.8 2 .4.2.9.1 1.2-.2l.8-.8c.3-.3.8-.3 1.1 0l1.6 1.6c.3.3.3.8 0 1.1-.8.8-2 1.3-3 .9C11 15.8 8.2 13 7.1 9.9c-.4-1 .1-2.2.9-3 .3-.3.8-.3 1.1 0l1.6 1.6c.3.3.3.8 0 1.1l-.8.8c-.3.3-.4.8-.2 1.2z" fill="currentColor" stroke="none" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h5>Navegação</h5>
          <ul>
            <li><a href="#manifesto">Manifesto</a></li>
            <li><a href="#diferenca">Diferença</a></li>
            <li><a href="#planos">Planos</a></li>
            <li><a href="#unidades">Unidades</a></li>
            <li><a href="#app">App Alpha</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h5>Suporte</h5>
          <ul>
            <li><a href="https://wa.me/559985332667" target="_blank" rel="noreferrer">+55 99 8533-2667</a></li>
            <li><a href="mailto:contato@alphafit.com.br">contato@alphafit.com.br</a></li>
          </ul>
        </div>

        <div>
          <h5>Legal</h5>
          <ul>
            <li><a href="/privacidade">Política de Privacidade</a></li>
            <li><a href="/termos">Termos de Uso</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 ALPHA FIT</span>
      </div>
    </footer>
  )
}
