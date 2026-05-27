import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const ring = ringRef.current
    if (!cursor || !ring) return

    let mx = 0, my = 0, rx = 0, ry = 0

    const onMove = (e) => {
      mx = e.clientX
      my = e.clientY
      cursor.style.left = mx + 'px'
      cursor.style.top = my + 'px'
    }

    const raf = () => {
      rx += (mx - rx) * 0.18
      ry += (my - ry) * 0.18
      ring.style.left = rx + 'px'
      ring.style.top = ry + 'px'
      requestAnimationFrame(raf)
    }

    window.addEventListener('mousemove', onMove)
    const rafId = requestAnimationFrame(raf)

    const els = document.querySelectorAll('a, button, .unit-tile, .tcard, .bento-cell, .faq-q')
    const enter = () => { cursor.classList.add('is-hover'); ring.classList.add('is-hover') }
    const leave = () => { cursor.classList.remove('is-hover'); ring.classList.remove('is-hover') }
    els.forEach((el) => { el.addEventListener('mouseenter', enter); el.addEventListener('mouseleave', leave) })

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  )
}
