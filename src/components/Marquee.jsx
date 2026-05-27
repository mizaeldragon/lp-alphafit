const items = [
  { type: 'word', text: 'SEM FIDELIDADE' },
  { type: 'serif', text: 'resultado real' },
  { type: 'word', text: 'PERSONAL SEM TAXA' },
  { type: 'serif', text: 'cinco unidades' },
  { type: 'word', text: 'APP COM IA' },
  { type: 'serif', text: '200+ máquinas' },
  { type: 'word', text: 'CLIMATIZADO 100%' },
  { type: 'serif', text: 'desde 2019' },
]

const doubled = [...items, ...items]

export default function Marquee() {
  return (
    <section className="marquee-section" aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i}>
            {item.type === 'word' ? (
              <>
                <span className="mword">{item.text}</span>
                <span className="mdot" />
              </>
            ) : (
              <span className="mserif">{item.text}</span>
            )}
          </span>
        ))}
      </div>
    </section>
  )
}
