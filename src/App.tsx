import Plans from './Plans'
import SocialIcon from './SocialIcon'
import { useEffect, useState } from 'react'
import googleMapsIcon from './assets/google-maps.webp'
import communityAvatar1 from './assets/community-avatar-1.png'
import communityAvatar2 from './assets/community-avatar-2.png'
import communityAvatar3 from './assets/community-avatar-3.png'
import wordmarkOlive from './assets/althea-wordmark-olive.png'
import wordmarkIvory from './assets/althea-wordmark-ivory.png'
import markOlive from './assets/althea-mark-olive.png'
import headerMark from './assets/althea-header-mark.png'
import heroImage from './assets/studio-class.png'
import reformerImage from './assets/studio-reformer.png'
import wundaImage from './assets/studio-interior.png'

import teamImage from './assets/studio-team.png'
import detailImage from './assets/studio-detail.png'
import guidanceImage from './assets/studio-guidance.png'

const BOOKING_URL = 'https://altheastudio.wstudio.app/#/onboarding'
const WHATSAPP_URL = 'https://wa.me/50685258080?text=Hola%20Althea%2C%20quisiera%20informaci%C3%B3n%20sobre%20las%20clases%20de%20Pilates.'
const INSTAGRAM_URL = 'https://www.instagram.com/altheapilatesstudio/'
const MAPS_URL = 'https://maps.app.goo.gl/VA1SxzT7VYRJ3ygF7'

const reviews = [
  { name: 'Laura Artavia', text: 'Estoy feliz con mi experiencia en Althea Studio. Mejoré mi postura, gané fuerza y me siento mucho más ágil. Las clases de Pilates son retadoras pero se adaptan a cada persona, perfectas si buscas bienestar y resultados reales. El ambiente es muy agradable y el acompañamiento profesional, 100% recomendado.' },
  { name: 'Gaby Rodriguez', text: 'Muy recomendadas las clases de pilates. En poco tiempo he notado cómo mi cuerpo se ha tonificado y fortalecido. Las clases son dinámicas, bien guiadas y adaptadas al nivel de cada persona. ¡Una excelente forma de entrenar y sentirte mejor contigo misma!' },
  { name: 'Yanin Acuña', text: 'El estudio es un lugar precioso, bien equipado, una estética impecable y las instructoras muy pacientes y con un gran don para enseñar. Super recomendado!' },
]

const schedule = [
  ['Lunes', ['06:00 AM', '07:00 AM', '08:00 AM', '09:00 AM', '04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM']],
  ['Martes', ['06:00 AM', '07:00 AM', '08:00 AM', '09:00 AM', '04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM']],
  ['Miércoles', ['06:00 AM', '07:00 AM', '08:00 AM', '09:00 AM', '04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM']],
  ['Jueves', ['06:00 AM', '07:00 AM', '08:00 AM', '09:00 AM', '04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM']],
  ['Viernes', ['06:00 AM', '07:00 AM', '08:00 AM', '09:00 AM', '04:00 PM', '05:00 PM', '06:00 PM']],
  ['Sábado', ['08:00 AM', '09:00 AM']],
] as const

const methods = [
  { name: 'Reformer', number: '01', text: 'Movimiento asistido por resistencia para explorar fuerza, control y precisión.', image: reformerImage, alt: 'Detalle de los resortes de un Reformer en Althea', position: 'center' },
  { name: 'Mat', number: '02', text: 'El trabajo esencial de Pilates a través del control corporal y el movimiento consciente.', image: guidanceImage, alt: 'Acompañamiento de una instructora durante una clase en Althea', position: 'center' },
  { name: 'Wunda', number: '03', text: 'Una práctica compacta y desafiante que amplía las posibilidades del método Pilates.', image: wundaImage, alt: 'Equipos de Pilates y sillas Wunda en el estudio Althea', position: 'center' },
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
        <a className="brand" href="#inicio" aria-label="Althea Pilates Studio — Inicio">
          <img className="brand-wordmark" src={wordmarkOlive} alt="Althea Pilates Studio" />
          <img className="brand-symbol" src={headerMark} alt="" aria-hidden="true" />
        </a>
        <nav className={menuOpen ? 'is-open' : ''} aria-label="Navegación principal">
          {[
            ['Inicio', '#inicio'], ['El estudio', '#estudio'], ['Pilates', '#pilates'],
            ['Horarios', '#horarios'], ['Ubicación', '#ubicacion'], ['Contacto', '#contacto'],
          ].map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
          <a className="button button-primary nav-book" href={BOOKING_URL} target="_blank" rel="noreferrer">Agendar <ArrowIcon /></a>
        </nav>
        <a className="button button-primary desktop-book" href={BOOKING_URL} target="_blank" rel="noreferrer">Agendar <ArrowIcon /></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}><MenuIcon open={menuOpen} /></button>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-copy reveal is-visible">
            <p className="eyebrow">Althea Pilates Studio · Ciudad Quesada</p>
            <h1>Movimiento<br /><em>con intención.</em></h1>
            <p className="hero-lead">Pilates clásico y contemporáneo en un espacio pensado para conectar con tu cuerpo.</p>
            <div className="hero-actions">
              <a className="button button-primary" href={BOOKING_URL} target="_blank" rel="noreferrer">Agendar <ArrowIcon /></a>
              <a className="text-link" href="#estudio">Conocer Althea <ArrowIcon /></a>
            </div>
            <div className="hero-social-proof">

              <div className="community-avatars" aria-hidden="true">
                {[communityAvatar1, communityAvatar2, communityAvatar3].map((avatar) => (
                  <img key={avatar} src={avatar} alt="" width="36" height="36" />
                ))}
              </div>
              <a className="hero-rating" href={MAPS_URL} target="_blank" rel="noreferrer" aria-label="Calificación 5.0 de 5. Ver en Google Maps">
                <span className="hero-stars" aria-hidden="true">★★★★★</span>
                <img className="google-maps-icon" src={googleMapsIcon} alt="" width="18" height="26" />
                <span className="hero-rating-score">5.0</span>
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
              <img className="studio-team" src={teamImage} alt="El equipo de Althea Pilates Studio" loading="lazy" />
              <img className="studio-detail" src={detailImage} alt="Espejo y equipo de Pilates en el interior de Althea" loading="lazy" />
            </div>
            <div className="manifesto-copy reveal">
              <h2>Pilates para moverte mejor, sentirte mejor y <em>reconectar con tu cuerpo.</em></h2>
              <p>En Althea combinamos Pilates clásico y contemporáneo en un espacio diseñado para el movimiento consciente, el control y el bienestar.</p>
              <p>Trabajamos con diferentes métodos y equipos para crear una experiencia de Pilates cuidada, precisa y personal.</p>
            </div>
          </div>
          <div className="values reveal" aria-label="Valores de Althea">
            {['Control', 'Precisión', 'Equilibrio', 'Presencia'].map((value, i) => <div key={value}><span>0{i + 1}</span>{value}</div>)}
          </div>
        </section>

        <section className="methods section" id="pilates">
          <div className="section-heading reveal">
            <div className="section-label light">La práctica</div>
            <h2>Tres formas de<br /><em>encontrar tu centro.</em></h2>
            <p>Cada método abre una manera distinta de explorar el movimiento con atención y propósito.</p>
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
            <h2>Un momento para<br /><em>volver a ti.</em></h2>
            <p>Estos son nuestros horarios habituales. Consulta la disponibilidad actualizada por WhatsApp.</p>
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
            <p>Consulta disponibilidad y agenda desde nuestra plataforma.</p>
            <a className="button button-outline" href={BOOKING_URL} target="_blank" rel="noreferrer">Agendar <ArrowIcon /></a>
          </div>
        </section>

        <Plans bookingUrl={BOOKING_URL} />

        <section className="booking section" aria-labelledby="booking-title">
          <div className="booking-inner reveal">
            <img className="booking-mark" src={markOlive} alt="" aria-hidden="true" />
            <p className="eyebrow">Tu espacio te espera</p>
            <h2 id="booking-title">Tu práctica<br /><em>comienza aquí.</em></h2>
            <p>Encuentra tu clase y agenda desde nuestra plataforma.</p>
            <div className="booking-actions">
              <a className="button button-primary button-large" href={BOOKING_URL} target="_blank" rel="noreferrer">Agendar <ArrowIcon /></a>
              <a className="button button-ghost button-large" href="#planes">Ver planes</a>
            </div>
          </div>
        </section>

        <section className="community section" id="comunidad">
          <div className="community-main">
          <div className="community-copy reveal">
            <div className="section-label">Comunidad</div>
            <h2>Una comunidad que<br /><em>sigue creciendo.</em></h2>
            <p>Conoce lo que otras personas comparten sobre su experiencia en Althea.</p>
            <a className="text-link" href={MAPS_URL} target="_blank" rel="noreferrer">Ver reseñas en Google <ArrowIcon /></a>
          </div>
          <div className="reviews-list">
            {reviews.map((review) => (
              <figure className="review-card reveal" key={review.name}>
                <div className="review-stars" aria-label="5 de 5 estrellas"><span aria-hidden="true">★★★★★</span></div>
                <blockquote><p>{review.text}</p></blockquote>
                <figcaption><strong>{review.name}</strong><a href={MAPS_URL} target="_blank" rel="noreferrer">Reseña en Google Maps <ArrowIcon /></a></figcaption>
              </figure>
            ))}
          </div>
          </div>
          <div className="instagram-bar reveal">
            <div><small>Instagram</small><strong>@altheapilatesstudio</strong></div>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Ver Instagram de Althea"><ArrowIcon /></a>
          </div>
        </section>

        <section className="location section" id="ubicacion">
          <div className="location-card reveal">
            <div className="section-label light">Ubicación</div>
            <h2>Nos encontramos en<br /><em>Ciudad Quesada.</em></h2>
            <address>
              <strong>Althea Pilates Studio</strong>
              <span>Centro Deportivo Eligon</span>
              <span>Cd Quesada, Alajuela, 21001</span>
              <span>Costa Rica</span>
            </address>
            <a className="button button-light" href={MAPS_URL} target="_blank" rel="noreferrer">Cómo llegar <ArrowIcon /></a>
          </div>
          <div className="location-visual reveal">
            <iframe
              title="Ubicación de Althea Studio en Centro Deportivo Eligon, Ciudad Quesada"
              src="https://www.google.com/maps?q=Althea+Studio&ll=10.3273886,-84.4234539&cid=6166275438638420543&z=17&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <a href={MAPS_URL} target="_blank" rel="noreferrer">Ver ubicación <ArrowIcon /></a>
          </div>
        </section>
      </main>

      <footer id="contacto">
        <div className="footer-top">
          <img className="footer-logo" src={wordmarkIvory} alt="Althea Pilates Studio" />
          <div className="footer-cta"><p>¿Lista para comenzar?</p><a href={BOOKING_URL} target="_blank" rel="noreferrer">Agendar <ArrowIcon /></a></div>
        </div>
        <div className="footer-bottom">
          <div><strong>Ciudad Quesada</strong><span>San Carlos, Costa Rica</span></div>
          <div className="footer-links"><a href={INSTAGRAM_URL} target="_blank" rel="noreferrer"><SocialIcon type="instagram" />Instagram</a><a href={WHATSAPP_URL} target="_blank" rel="noreferrer"><SocialIcon type="whatsapp" />WhatsApp</a><a href={MAPS_URL} target="_blank" rel="noreferrer"><SocialIcon type="location" />Ubicación</a></div>
          <p>© {new Date().getFullYear()} Althea Pilates Studio</p>
        </div>
      </footer>

      <div className="mobile-cta" aria-label="Acciones rápidas">
        <a className="button button-primary" href={BOOKING_URL} target="_blank" rel="noreferrer">Agendar</a>
        <a className="whatsapp-mini" href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="Escribir por WhatsApp"><SocialIcon type="whatsapp" /></a>
      </div>
    </div>
  )
}

export default App
