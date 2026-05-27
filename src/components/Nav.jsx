import { useEffect, useRef, useState } from 'react'

export default function Nav() {
  const navRef = useRef(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const nav = navRef.current
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const scrollTo = (id) => (e) => {
    e.preventDefault()
    setOpen(false)
    const el = document.querySelector(id)
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' })
  }

  const links = [
    { href: '#manifesto', label: 'Estrutura' },
    { href: '#diferenca', label: 'Diferença' },
    { href: '#planos', label: 'Planos' },
    { href: '#unidades', label: 'Unidades' },
    { href: '#app', label: 'App' },
    { href: '#faq', label: 'FAQ' },
  ]

  return (
    <>
      <nav className="nav" ref={navRef}>
        <div className="nav-inner">
          <a className="logo" href="#">
            <img src="/logo-alphafit.png" alt="Alpha Fit" className="logo-img" />
          </a>

          <div className="nav-center">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={scrollTo(l.href)}>{l.label}</a>
            ))}
          </div>

          <a className="nav-cta" href="#aula-experimental" onClick={scrollTo('#aula-experimental')}>
            Agendar aula
            <span className="arrow">→</span>
          </a>

          <button
            className={`nav-burger${open ? ' active' : ''}`}
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${open ? ' open' : ''}`} onClick={() => setOpen(false)}>
        <div className="mobile-menu-inner" onClick={(e) => e.stopPropagation()}>
          <nav className="mobile-nav-links">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={scrollTo(l.href)}>{l.label}</a>
            ))}
          </nav>
          <a className="btn btn-primary mobile-menu-cta" href="#aula-experimental" onClick={scrollTo('#aula-experimental')}>
            Agendar aula
            <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </>
  )
}
