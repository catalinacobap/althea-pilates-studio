import Plans from './Plans'
import SocialIcon from './SocialIcon'
import { useEffect, useState } from 'react'
import heroImage from './assets/pilates-hero.jpg'
import reformerImage from './assets/pilates-reformer.jpg'
import wundaImage from './assets/pilates-wunda.jpg'

import teamImage from './assets/pilates-hero.jpg'
import detailImage from './assets/pilates-wunda.jpg'
import guidanceImage from './assets/pilates-reformer.jpg'

const BOOKING_URL = '#planes'
const CONTACT_URL = '#contacto'
const SOCIAL_URL = '#demo-info'
const MAPS_URL = '#ubicacion'

const reviews = [
  { name: 'Clara Ejemplo', text: 'Mi pausa favorita de la semana. Me gusta llegar sin prisas, descubrir ejercicios nuevos y dedicar un rato a moverme con atención.' },
  { name: 'Nicolás Demo', text: 'Las sesiones tienen un ritmo muy agradable. Siempre encuentro una propuesta distinta y espacio para aprender a mi manera.' },
  { name: 'Lucía Muestra', text: 'Un ambiente tranquilo y clases que invitan a disfrutar el proceso. Salgo con ganas de volver y seguir explorando.' },
]

const schedule = [
  ['Lunes', ['06:30 AM', '07:30 AM', '08:30 AM', '10:30 AM', '03:30 PM', '04:30 PM', '05:30 PM', '06:30 PM']],
  ['Martes', ['06:30 AM', '07:30 AM', '08:30 AM', '10:30 AM', '03:30 PM', '04:30 PM', '05:30 PM', '06:30 PM']],
  ['Miércoles', ['06:30 AM', '07:30 AM', '08:30 AM', '10:30 AM', '03:30 PM', '04:30 PM', '05:30 PM', '06:30 PM']],
  ['Jueves', ['06:30 AM', '07:30 AM', '08:30 AM', '10:30 AM', '03:30 PM', '04:30 PM', '05:30 PM', '06:30 PM']],
  ['Viernes', ['06:30 AM', '07:30 AM', '08:30 AM', '10:30 AM', '03:30 PM', '04:30 PM', '05:30 PM']],
  ['Sábado', ['08:30 AM', '10:30 AM']],
] as const

const methods = [
  { name: 'Reformer', number: '01', text: 'Secuencias con resortes y apoyos que invitan a descubrir nuevas formas de moverte.', image: reformerImage, alt: 'Detalle de los resortes de un Reformer en este estudio', position: 'center' },
  { name: 'Mat', number: '02', text: 'Un encuentro con la respiración y el movimiento, con la colchoneta como punto de partida.', image: guidanceImage, alt: 'Equipo de Pilates en una imagen ilustrativa', position: 'center' },
  { name: 'Wunda', number: '03', text: 'Pequeños retos de coordinación sobre un equipo que ofrece múltiples posibilidades.', image: wundaImage, alt: 'Imagen ilustrativa de una silla Wunda', position: 'center' },
]

function ArrowIcon() {
  return <svg aria-hidden="true" viewBox="0 0 20 20"><path d="M4 10h11M11 5l5 5-5 5" /></svg>
}

function MenuIcon({ open }: { open: boolean }) {
  return <span className={`menu-icon ${open ? 'is-open' : ''}`} aria-hidden="true"><i /><i /></span>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible'))
    }, { threshold: 0.12 })
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <a className="brand" href="#inicio" aria-label="Inicio">Estudio demo</a>
        <nav className={menuOpen ? 'is-open' : ''} aria-label="Navegación principal">
          {[
            ['Inicio', '#inicio'], ['El estudio', '#estudio'], ['Pilates', '#pilates'],
            ['Horarios', '#horarios'], ['Ubicación', '#ubicacion'], ['Contacto', '#contacto'],
          ].map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
          <a className="button button-outline nav-whatsapp" href={CONTACT_URL} onClick={closeMenu}><SocialIcon type="location" /> Contacto</a>
        </nav>
        <a className="button button-primary desktop-book" href={BOOKING_URL}>Explorar planes <ArrowIcon /></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}><MenuIcon open={menuOpen} /></button>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-copy reveal is-visible">
            <p className="eyebrow">Estudio demo · Un lugar para ti</p>
            <h1>Respira profundo.<br /><em>Muévete libre.</em></h1>
            <p className="hero-lead">Una pausa en tu día para explorar el movimiento, disfrutar la práctica y encontrar tu propio ritmo.</p>
            <div className="hero-actions">
              <a className="button button-primary" href={BOOKING_URL}>Explorar planes <ArrowIcon /></a>
              <a className="text-link" href="#estudio">Explorar el espacio <ArrowIcon /></a>
            </div>
            <div className="hero-social-proof">

              <div className="community-avatars" aria-hidden="true">
                {['CE', 'ND', 'LM'].map((initials) => (
                  <span key={initials}>{initials}</span>
                ))}
              </div>
              <a className="hero-rating" href="#comunidad" aria-label="Valoración ficticia de ejemplo: 4.9 de 5">
                <span className="hero-stars" aria-hidden="true">★★★★★</span>
                <span className="hero-rating-score">4.9 · Demo</span>
              </a>

            </div>
          </div>
          <div className="hero-visual reveal is-visible">
            <img src={heroImage} alt="Práctica de Pilates Reformer en un estudio de luz natural" fetchPriority="high" />
          </div>
        </section>

        <section className="manifesto section" id="estudio">
          <div className="section-label reveal">El estudio</div>
          <div className="manifesto-grid">
            <div className="studio-photos reveal">
              <img className="studio-team" src={teamImage} alt="Imagen ilustrativa de una sesión de Pilates" loading="lazy" />
              <img className="studio-detail" src={detailImage} alt="Espejo y equipo de Pilates en el interior de este estudio" loading="lazy" />
            </div>
            <div className="manifesto-copy reveal">
              <h2>Un lugar para hacer una pausa y <em>descubrir nuevas posibilidades.</em></h2>
              <p>Imagina un estudio luminoso, grupos pequeños y tiempo para aprender. Esta propuesta ficticia pone la curiosidad y el disfrute en el centro de cada sesión.</p>
              <p>Aquí cada práctica es una invitación a probar algo distinto, escuchar tu ritmo y hacer del movimiento un pequeño ritual cotidiano.</p>
            </div>
          </div>
          <div className="values reveal" aria-label="Valores de este estudio">
            {['Calma', 'Energía', 'Armonía', 'Fluidez'].map((value, i) => <div key={value}><span>0{i + 1}</span>{value}</div>)}
          </div>
        </section>

        <section className="methods section" id="pilates">
          <div className="section-heading reveal">
            <div className="section-label light">La práctica</div>
            <h2>Nuevas maneras de<br /><em>disfrutar la práctica.</em></h2>
            <p>Explora tres propuestas de ejemplo, desde secuencias suaves hasta retos de coordinación.</p>
          </div>
          <div className="method-grid">
            {methods.map((method) => (
              <article className="method-card reveal" key={method.name}>
                <div className="method-image"><img src={method.image} alt={method.alt} loading="lazy" style={{ objectPosition: method.position }} /><span>{method.number}</span></div>
                <div className="method-content"><h3>{method.name}</h3><p>{method.text}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="schedule section" id="horarios">
          <div className="schedule-intro reveal">
            <div className="section-label">Horarios</div>
            <h2>Haz espacio para<br /><em>una nueva rutina.</em></h2>
            <p>Una agenda de ejemplo para imaginar tu semana. Todos los horarios son ficticios.</p>
          </div>
          <div className="schedule-table reveal">
            {schedule.map(([day, times]) => (
              <details className="schedule-day" key={day} open={day === 'Lunes'}>
                <summary><span>{day}</span><small>{times.length} horarios</small><i /></summary>
                <div className="time-list">{times.map((time) => <span key={time}>{time}</span>)}</div>
              </details>
            ))}
          </div>
          <div className="schedule-foot reveal">
            <p>Explora las opciones de esta demostración, sin reservas reales.</p>
            <a className="button button-outline" href={BOOKING_URL}>Explorar planes <ArrowIcon /></a>
          </div>
        </section>

        <Plans bookingUrl="#demo-info" />

        <section className="booking section" aria-labelledby="booking-title">
          <div className="booking-inner reveal">
            <p className="eyebrow">Dale espacio al movimiento</p>
            <h2 id="booking-title">Un nuevo hábito<br /><em>a tu propio ritmo.</em></h2>
            <p>Descubre las sesiones y los paquetes de muestra.</p>
            <div className="booking-actions">
              <a className="button button-primary button-large" href={BOOKING_URL}>Explorar planes <ArrowIcon /></a>
              <a className="button button-ghost button-large" href="#planes">Ver planes</a>
            </div>
          </div>
        </section>

        <section className="community section" id="comunidad">
          <div className="community-main">
          <div className="community-copy reveal">
            <div className="section-label">Comunidad</div>
            <h2>Historias para<br /><em>inspirar tu día.</em></h2>
            <p>Voces imaginarias para mostrar cómo se vería la comunidad. Los nombres y testimonios son ficticios.</p>
            <a className="text-link" href="#demo-info">Conocer la demo <ArrowIcon /></a>
          </div>
          <div className="reviews-list">
            {reviews.map((review) => (
              <figure className="review-card reveal" key={review.name}>
                <div className="review-stars" aria-label="5 de 5 estrellas"><span aria-hidden="true">★★★★★</span></div>
                <blockquote><p>{review.text}</p></blockquote>
                <figcaption><strong>{review.name}</strong><a href="#demo-info">Testimonio ficticio <ArrowIcon /></a></figcaption>
              </figure>
            ))}
          </div>
          </div>
          <div className="instagram-bar reveal">
            <div><small>Instagram</small><strong>@estudio.demo</strong></div>
            <a href={SOCIAL_URL} aria-label="Ver información de la demo"><ArrowIcon /></a>
          </div>
        </section>

        <section className="location section" id="ubicacion">
          <div className="location-card reveal">
            <div className="section-label light">Ubicación</div>
            <h2>Imagina tu pausa en<br /><em>Villa Brisa.</em></h2>
            <address>
              <strong>Estudio demo</strong>
              <span>Paseo del Viento, local 12</span>
              <span>Barrio Jardín, 00000</span>
              <span>País de ejemplo</span>
            </address>
            <a className="button button-light" href={MAPS_URL}>Ver mapa de ejemplo <ArrowIcon /></a>
          </div>
          <div className="location-visual reveal">
            <div className="demo-map" role="img" aria-label="Mapa ilustrativo de una ubicación ficticia">
              <span className="demo-map-street">Paseo del Viento</span>
              <div className="demo-map-pin"><SocialIcon type="location" /><strong>Estudio demo</strong><small>Mapa de ejemplo · Sin ubicación real</small></div>
            </div>
            <a href={MAPS_URL}>Ubicación ficticia <ArrowIcon /></a>
          </div>
        </section>
      </main>

      <footer id="contacto">
        <div className="footer-top">
          <div className="footer-intro">
            <span className="footer-name">Estudio demo</span>
            <p className="demo-note" id="demo-info">Sitio de demostración. Identidad, testimonios, horarios, precios y dirección ficticios. Sin reservas ni contacto comercial. hola@estudio.example</p>
          </div>
          <div className="footer-cta"><p>¿Exploramos las opciones?</p><a href={BOOKING_URL}>Explorar planes <ArrowIcon /></a></div>
        </div>
        <div className="footer-bottom">
          <div><strong>Villa Brisa</strong><span>Distrito Aurora · Ubicación ficticia</span></div>
          <div className="footer-links"><a href={SOCIAL_URL}><SocialIcon type="instagram" />Instagram</a><a href={MAPS_URL}><SocialIcon type="location" />Ubicación</a></div>
          <p>© {new Date().getFullYear()} Estudio demo</p>
        </div>
      </footer>

    </div>
  )
}

export default App
