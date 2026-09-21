import { useState } from 'react'

type Plan = { name: string; price: number; classes: string; validity: string; category: string; reservations?: number; daily?: number; description?: string }
const monthly: Plan[] = [
  { name: 'Clase Grupal', price: 12000, classes: '1 clase suelta', validity: '1 mes', category: 'Aparatos', reservations: 1, description: '¿Quieres probar el Pilates Reformer y descubrir cómo puede transformar tu cuerpo y mente? Esta clase es ideal para quienes desean experimentar la disciplina antes de comprometerse con un plan. Únete a una sesión grupal diseñada para fortalecer, equilibrar y revitalizar, apta para todos los niveles.' },
  { name: 'Plan Balance', price: 45000, classes: '4 clases grupales al mes', validity: '1 mes', category: 'Aparatos', reservations: 4, description: 'Este plan está diseñado para quienes desean explorar los múltiples beneficios de esta práctica con un compromiso accesible. Con una clase semanal, mejorarás tu postura, fortalecerás tu cuerpo y comenzarás a conectar mente y cuerpo 🌟' },
  { name: 'Plan Renueva', price: 65000, classes: '8 clases grupales al mes', validity: '1 mes', category: 'Aparatos', reservations: 8, description: 'Renueva tu energía y bienestar con este plan diseñado para quienes buscan un progreso constante. Con dos clases semanales, notarás cambios significativos en tu fuerza, flexibilidad y equilibrio mental. Es la opción perfecta para quienes desean resultados visibles y están comprometidos con su salud de manera constante. ✨' },
  { name: 'Plan Transforma', price: 85000, classes: '12 clases grupales al mes', validity: '1 mes', category: 'Aparatos', reservations: 12, description: 'Este plan está pensado para quienes desean dar un giro completo a su bienestar. Con tres clases semanales, experimentarás una transformación integral en cuerpo y mente. Alcanzarás metas específicas como mayor fuerza, movilidad mejorada y una notable reducción del estrés. Es el plan ideal para quienes buscan resultados profundos y sostenidos. 🍃' },
  { name: 'Plan Trascender', price: 113000, classes: '16 clases grupales al mes', validity: '1 mes', category: 'Aparatos', reservations: 16, description: 'Para quienes buscan ir más allá y transformar su práctica de Pilates en una experiencia completa. Con cuatro clases semanales, este plan intensivo te ayudará a alcanzar nuevos niveles de fuerza, flexibilidad y conexión mente-cuerpo. Ideal para clientes comprometidos con su bienestar y que buscan potenciar cada aspecto de su vida. 🌟' },
]
const quarterly: Plan[] = [
  { name: 'Plan Balance — Trimestral', price: 135000, classes: '4 clases grupales al mes durante 3 meses', reservations: 12 },
  { name: 'Plan Renueva — Trimestral', price: 195000, classes: '8 clases grupales al mes durante 3 meses', reservations: 24 },
  { name: 'Plan Transforma — Trimestral', price: 255000, classes: '12 clases grupales al mes durante 3 meses', reservations: 36 },
  { name: 'Plan Trascender — Trimestral', price: 348000, classes: '16 clases grupales al mes durante 3 meses', reservations: 48 },
].map(plan => ({ ...plan, validity: '3 meses', category: 'Aparatos', daily: 1 }))
const privatePlans: Plan[] = [
  { name: 'Plan Privadas', price: 90000, classes: '4 clases al mes', validity: '1 mes', category: 'Privada', reservations: 4, description: 'Perfecto para quienes buscan atención personalizada y un programa adaptado a sus necesidades específicas. En estas sesiones uno a uno, recibirás guía directa para alcanzar tus objetivos de forma segura y efectiva, ya sea para fortalecer, rehabilitar o mejorar tu postura. Ideal si buscas flexibilidad en tu tiempo y un enfoque 100% personalizado.' },
  { name: 'Plan Privadas', price: 168000, classes: '8 clases al mes', validity: '1 mes', category: 'Privada', reservations: 8, description: 'La opción perfecta si quieres comprometerte más profundamente con tu bienestar. Este paquete te permite trabajar a fondo tus objetivos con sesiones completamente personalizadas y seguimiento continuo. Ideal para quienes desean maximizar resultados con la comodidad y atención de clases privadas.' },
  { name: 'Clase Privada', price: 25000, classes: '1 clase suelta', validity: '1 mes', category: 'Privada', reservations: 1, description: 'Explora el Pilates de manera personalizada con esta clase individual. Perfecta para quienes desean probar la disciplina con un enfoque exclusivo en sus necesidades y objetivos. Una excelente forma de comenzar tu camino hacia una mejor calidad de vida con atención 100% dedicada.' },
]
const mat: Plan[] = [
  { name: 'Mat Balance', price: 32000, classes: '4 clases grupales de mat al mes', validity: '1 mes', category: 'Mat' },
  { name: 'Mat Renueva', price: 52000, classes: '8 clases grupales de mat al mes', validity: '1 mes', category: 'Mat' },
]
const groups = ['Grupales', 'Privadas', 'Pilates Mat'] as const
export default function Plans({ bookingUrl }: { bookingUrl: string }) {
  const [group, setGroup] = useState<typeof groups[number]>('Grupales')
  const [quarter, setQuarter] = useState(false)
  const plans = group === 'Grupales' ? (quarter ? quarterly : monthly) : group === 'Privadas' ? privatePlans : mat
  return <section className="plans section" id="planes" aria-labelledby="plans-title">
    <div className="section-label">Planes</div>
    <div className="plans-heading"><h2 id="plans-title">Una práctica<br /><em>a tu medida.</em></h2><p>Encuentra el plan que acompaña tu ritmo y agenda desde nuestra plataforma.</p></div>
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
    <a className="button button-outline plans-cta" href={bookingUrl} target="_blank" rel="noreferrer">Agendar <svg aria-hidden="true" viewBox="0 0 20 20"><path d="M4 10h11M11 5l5 5-5 5" /></svg></a>
  </section>
}
