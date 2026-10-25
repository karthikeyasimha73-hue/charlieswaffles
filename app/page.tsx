import Image from 'next/image'
import { ArrowDown, ArrowUpRight, Clock3, MapPin, Phone, Sparkles } from 'lucide-react'
import { ContactForm } from '@/components/contact-form'
import { MenuSection } from '@/components/menu-section'
import { SiteHeader } from '@/components/site-header'
import { business } from '@/lib/business-data'

export default function Page() {
  return (
    <main id="home">
      <div className="announcement-bar">
        <span><Sparkles size={14} aria-hidden="true" /> A little sweetness makes every moment special.</span>
        <span className="announcement-location">Anantapur, Andhra Pradesh</span>
      </div>
      <SiteHeader />

      <section className="hero-section" aria-labelledby="hero-title">
        <Image
          src="/waffle-hero.png"
          alt="Golden Belgian waffle with chocolate drizzle, berries and vanilla ice cream"
          fill
          priority
          sizes="100vw"
          className="hero-image"
        />
        <div className="hero-shade" />
        <div className="page-shell hero-inner">
          <div className="hero-copy">
            <p className="eyebrow eyebrow-light"><span /> Your sweet corner in Anantapur <span className="veg-label"><span className="veg-dot" aria-hidden="true" />It&apos;s a Pure Veg</span></p>
            <h1 id="hero-title">Welcome to<br />Charlie&apos;s <em>Waffles</em></h1>
            <p className="hero-subtitle">A little sweetness makes every moment special.</p>
            <div className="hero-actions">
              <a className="button button-gold" href="#menu">Explore menu <ArrowDown size={16} aria-hidden="true" /></a>
              <a className="button button-glass" href={business.orderUrl} target="_blank" rel="noreferrer">Order online <ArrowUpRight size={16} aria-hidden="true" /></a>
            </div>
            <a className="hero-directions" href={business.directionsUrl} target="_blank" rel="noreferrer">
              <MapPin size={16} aria-hidden="true" /> Get directions <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="hero-stamp" aria-label="A sweet little moment">
            <span className="stamp-icon">cw</span>
            <span>Make room<br />for a little<br /><em>happy.</em></span>
          </div>
        </div>
        <a className="scroll-cue" href="#about" aria-label="Scroll to learn about Charlie’s Waffles"><span /> Scroll to explore</a>
      </section>

      <section className="welcome-strip" id="about">
        <div className="page-shell welcome-grid">
          <div className="welcome-symbol" aria-hidden="true"><span>cw</span><i /></div>
          <div className="welcome-copy">
            <p className="eyebrow">A warm welcome</p>
            <h2>Welcome to our<br /><em>sweet corner.</em></h2>
          </div>
          <div className="welcome-description">
            <p>Charlie&apos;s Waffles is a bakery and cake shop in Anantapur, here for the small celebrations and the everyday cravings. Explore dessert options, find your favourite, and enjoy a little sweet moment.</p>
            <a className="text-link" href="#visit">Come say hello <ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      <MenuSection />

      <section className="visit-section section-pad" id="visit">
        <div className="page-shell visit-layout">
          <div className="visit-copy">
            <p className="eyebrow">Find your way to us</p>
            <h2>Sweet things<br />are <em>close by.</em></h2>
            <p className="visit-description">We&apos;re looking forward to welcoming you at our Anantapur sweet corner.</p>
            <a className="button button-dark directions-button" href={business.directionsUrl} target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>
          <div className="business-card">
            <div className="business-card-heading">
              <span className="business-pin"><MapPin size={20} aria-hidden="true" /></span>
              <div><p className="eyebrow">Come on over</p><h3>{business.name}</h3></div>
            </div>
            <div className="business-detail">
              <MapPin size={18} aria-hidden="true" />
              <div><span>Address</span><p>{business.address}</p></div>
            </div>
            <a className="business-detail detail-link" href={business.phoneLink}>
              <Phone size={18} aria-hidden="true" />
              <div><span>Call us</span><p>{business.phone}</p></div>
              <ArrowUpRight className="detail-arrow" size={15} aria-hidden="true" />
            </a>
            <div className="business-detail">
              <Clock3 size={18} aria-hidden="true" />
              <div><span>Opening hours</span><p>{business.openingHours}</p></div>
            </div>
            <div className="business-card-footer"><span>{business.category}</span><span>{business.priceRange}</span></div>
          </div>
        </div>
      </section>

      <section className="contact-section section-pad" id="contact">
        <div className="page-shell contact-layout">
          <div className="contact-intro">
            <p className="eyebrow eyebrow-light">We&apos;re all ears</p>
            <h2>Let&apos;s make<br />something <em>sweet.</em></h2>
            <p>Questions about the menu or planning a visit? Give us a call or leave a note.</p>
            <a className="contact-phone" href={business.phoneLink}><Phone size={17} aria-hidden="true" /> {business.phone}</a>
          </div>
          <div className="contact-form-panel">
            <div className="form-heading"><span>Say hello</span><span className="form-sparkle" aria-hidden="true">✳</span></div>
            <ContactForm />
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="page-shell">
          <div className="footer-main">
            <div className="footer-brand-block">
              <a className="brand footer-brand" href="#home">
                <span className="brand-mark" aria-hidden="true">cw</span>
                <span className="brand-name">Charlie&apos;s <em>Waffles</em></span>
              </a>
              <p>A little sweetness makes every moment special.</p>
            </div>
            <div className="footer-links"><h3>Explore</h3><a href="#menu">Our menu</a><a href="#about">Our story</a><a href="#visit">Find us</a><a href="#contact">Contact</a></div>
            <div className="footer-links"><h3>Come visit</h3><p>{business.address}</p><a href={business.phoneLink}>{business.phone}</a></div>
            <div className="footer-actions">
              <a className="button button-gold" href={business.orderUrl} target="_blank" rel="noreferrer">Order online <ArrowUpRight size={15} aria-hidden="true" /></a>
              <a className="footer-direction" href={business.directionsUrl} target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={14} aria-hidden="true" /></a>
            </div>
          </div>
          <div className="footer-bottom"><span>© {new Date().getFullYear()} Charlie&apos;s Waffles</span><span>Made for sweet moments in Anantapur.</span></div>
        </div>
      </footer>
    </main>
  )
}
