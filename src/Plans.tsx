import { useState } from 'react'

type Plan = { name: string; price: number; classes: string; validity: string; category: string; reservations?: number; daily?: number; description?: string }
const monthly: Plan[] = [
  { name: 'Sesión Descubre', price: 9000, classes: '1 clase suelta', validity: '1 mes', category: 'Aparatos', reservations: 1, description: 'Una sesión de muestra para conocer el espacio y explorar movimientos sencillos en compañía.' },
  { name: 'Plan Semilla', price: 34000, classes: '4 clases grupales al mes', validity: '1 mes', category: 'Aparatos', reservations: 4, description: 'Cuatro encuentros para introducir una pausa activa en tu calendario. Un paquete ilustrativo para comenzar sin prisas.' },
  { name: 'Plan Impulso', price: 58000, classes: '8 clases grupales al mes', validity: '1 mes', category: 'Aparatos', reservations: 8, description: 'Ocho sesiones de ejemplo para alternar secuencias y encontrar una rutina que disfrutes.' },
  { name: 'Plan Horizonte', price: 78000, classes: '12 clases grupales al mes', validity: '1 mes', category: 'Aparatos', reservations: 12, description: 'Doce encuentros de muestra para dar más espacio al movimiento durante el mes.' },
  { name: 'Plan Plenitud', price: 98000, classes: '16 clases grupales al mes', validity: '1 mes', category: 'Aparatos', reservations: 16, description: 'Dieciséis sesiones ficticias para imaginar una agenda con variedad y continuidad.' },
]
const quarterly: Plan[] = [
  { name: 'Plan Semilla — Trimestral', price: 96000, classes: '4 clases grupales al mes durante 3 meses', reservations: 12 },
  { name: 'Plan Impulso — Trimestral', price: 162000, classes: '8 clases grupales al mes durante 3 meses', reservations: 24 },
  { name: 'Plan Horizonte — Trimestral', price: 216000, classes: '12 clases grupales al mes durante 3 meses', reservations: 36 },
  { name: 'Plan Plenitud — Trimestral', price: 276000, classes: '16 clases grupales al mes durante 3 meses', reservations: 48 },
].map(plan => ({ ...plan, validity: '3 meses', category: 'Aparatos', daily: 1 }))
const privatePlans: Plan[] = [
  { name: 'Sesiones a solas', price: 76000, classes: '4 clases al mes', validity: '1 mes', category: 'Privada', reservations: 4, description: 'Cuatro encuentros individuales de ejemplo, con tiempo para explorar tus preferencias.' },
  { name: 'Sesiones a solas', price: 144000, classes: '8 clases al mes', validity: '1 mes', category: 'Privada', reservations: 8, description: 'Ocho sesiones de muestra para imaginar un acompañamiento individual a lo largo del mes.' },
  { name: 'Encuentro individual', price: 21000, classes: '1 clase suelta', validity: '1 mes', category: 'Privada', reservations: 1, description: 'Una sesión ficticia para descubrir cómo sería una práctica individual.' },
]
const mat: Plan[] = [
  { name: 'Mat Esencial', price: 26000, classes: '4 clases grupales de mat al mes', validity: '1 mes', category: 'Mat' },
  { name: 'Mat Continuo', price: 46000, classes: '8 clases grupales de mat al mes', validity: '1 mes', category: 'Mat' },
]
const groups = ['Grupales', 'Privadas', 'Pilates Mat'] as const
export default function Plans({ bookingUrl }: { bookingUrl: string }) {
  const [group, setGroup] = useState<typeof groups[number]>('Grupales')
  const [quarter, setQuarter] = useState(false)
  const plans = group === 'Grupales' ? (quarter ? quarterly : monthly) : group === 'Privadas' ? privatePlans : mat
  return <section className="plans section" id="planes" aria-labelledby="plans-title">
    <div className="section-label">Planes</div>
    <div className="plans-heading"><h2 id="plans-title">Elige cómo<br /><em>quieres moverte.</em></h2><p>Paquetes y precios ficticios para explorar esta demo. No se realizan compras ni reservas.</p></div>
    <div className="plan-filters" role="group" aria-label="Tipo de clases">
      {groups.map(item => <button key={item} type="button" aria-pressed={group === item} onClick={() => setGroup(item)}>{item}</button>)}
    </div>
    {group === 'Grupales' && <div className="plan-period" role="group" aria-label="Vigencia del plan">
      <button type="button" aria-pressed={!quarter} onClick={() => setQuarter(false)}>Mensuales y clase suelta</button>
      <button type="button" aria-pressed={quarter} onClick={() => setQuarter(true)}>Trimestrales</button>
    </div>}
    <div className="plans-grid">
      {plans.map(plan => <article className="plan-card" key={plan.name + plan.classes}>
        <p className="plan-category">{plan.category}</p>
        <h3>{plan.name}</h3><p className="plan-classes">{plan.classes}</p>
        <p className="plan-price">₡{plan.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
        <dl><div><dt>Válido por</dt><dd>{plan.validity}</dd></div>
          {plan.reservations !== undefined && <div><dt>Reservaciones</dt><dd>{plan.reservations}</dd></div>}
          {plan.daily !== undefined && <div><dt>Reservaciones por día</dt><dd>{plan.daily}</dd></div>}
        </dl>
        {plan.description && <details className="plan-description"><summary>Conocer el plan</summary><p>{plan.description.split(/([🌟✨🍃])/u).map((part, index) => /[🌟✨🍃]/u.test(part) ? <span className="plan-emoji" key={index}>{part}</span> : part)}</p></details>}
      </article>)}
    </div>
    <a className="button button-outline plans-cta" href={bookingUrl}>Información de la demo <svg aria-hidden="true" viewBox="0 0 20 20"><path d="M4 10h11M11 5l5 5-5 5" /></svg></a>
  </section>
}
