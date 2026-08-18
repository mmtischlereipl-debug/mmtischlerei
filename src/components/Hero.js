import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Link, Trans, useTranslation } from "gatsby-plugin-react-i18next"
import { FaRulerCombined, FaTools, FaTruck, FaComments } from "react-icons/fa"

const services = [
  ["Kuchnie na wymiar", "kitchens"],
  ["Szafy i garderoby", "wardrobes"],
  ["Meble łazienkowe", "bathroom"],
  ["Meble dla firm i biur", "business"],
]

const Hero = () => {
  const { t } = useTranslation()
  return (
  <Wrapper>
    <section className="hero">
      <StaticImage src="../images/furniture.jpg" layout="fullWidth" placeholder="blurred" className="hero-image" alt={t("Meble kuchenne na wymiar M&M Tischlerei")} />
      <div className="overlay" />
      <div className="hero-copy">
        <p className="eyebrow"><Trans>Indywidualne rozwiązania dla Twojego wnętrza</Trans></p>
        <h1><Trans>Meble na wymiar — od projektu po montaż</Trans></h1>
        <p><Trans>Projektujemy, wykonujemy, transportujemy i montujemy meble dopasowane do Twojej przestrzeni.</Trans></p>
        <div className="actions">
          <Link className="primary" to="/contact/#quote"><Trans>Bezpłatna wycena</Trans></Link>
          <a className="secondary" href="https://wa.me/48791756101" target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </div>
    </section>
    <section className="section" aria-labelledby="services-title">
      <div className="section-heading"><p className="eyebrow"><Trans>Oferta</Trans></p><h2 id="services-title"><Trans>Meble stworzone dla Twojej przestrzeni</Trans></h2></div>
      <div className="service-grid">
        {services.map(([label, slug]) => <Link className="service-card" to="/offer/" key={slug}><h3><Trans>{label}</Trans></h3><span><Trans>Zobacz ofertę</Trans> →</span></Link>)}
      </div>
    </section>
    <section className="trust section" aria-labelledby="trust-title">
      <div className="section-heading"><p className="eyebrow"><Trans>Dlaczego M&M Tischlerei?</Trans></p><h2 id="trust-title"><Trans>Kompleksowo i na wymiar</Trans></h2></div>
      <div className="trust-grid">
        <article><FaRulerCombined /><h3><Trans>Indywidualny projekt</Trans></h3></article>
        <article><FaTools /><h3><Trans>Sprawdzone materiały i okucia</Trans></h3></article>
        <article><FaTruck /><h3><Trans>Transport i profesjonalny montaż</Trans></h3></article>
        <article><FaComments /><h3><Trans>Obsługa PL / DE / EN</Trans></h3></article>
      </div>
    </section>
    <section className="brands section">
      <div><p className="eyebrow"><Trans>Jakość wykonania</Trans></p><h2><Trans>Pracujemy na sprawdzonych markach i systemach</Trans></h2></div>
      <ul aria-label="Brands"><li>Festool</li><li>Bosch Professional</li><li>SOLA</li><li>Blum</li><li>Häfele</li><li>Hettich</li></ul>
    </section>
    <section className="final-cta section">
      <div><p className="eyebrow"><Trans>Masz pomysł na projekt?</Trans></p><h2><Trans>Prześlij wymiary, zdjęcia lub szkic</Trans></h2></div>
      <Link className="primary" to="/contact/#quote"><Trans>Poproś o wycenę</Trans></Link>
    </section>
  </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: var(--max-width); width: 95%; margin: 0 auto 5rem;
  .hero { position: relative; min-height: 34rem; border-radius: 10px; overflow: hidden; display: flex; align-items: center; }
  .hero-image, .overlay { position: absolute; inset: 0; width: 100%; height: 100%; }
  .overlay { z-index: 1; background: linear-gradient(90deg, rgba(20,24,27,.88) 0%, rgba(20,24,27,.58) 55%, rgba(20,24,27,.1) 100%); }
  .hero-copy { z-index: 2; position: relative; color: white; max-width: 780px; padding: clamp(2rem, 7vw, 6rem); }
  .hero-copy h1 { font-size: clamp(2.25rem, 6vw, 4.6rem); line-height: 1.05; }
  .hero-copy p { color: white; font-size: clamp(1rem, 2vw, 1.25rem); max-width: 650px; }
  .eyebrow { color: var(--clr-primary-brown); text-transform: uppercase; letter-spacing: .13em; font-weight: 800; font-size: .8rem; }
  .actions { display: flex; flex-wrap: wrap; gap: .8rem; margin-top: 2rem; }
  .primary, .secondary { min-height: 48px; display: inline-flex; align-items: center; justify-content: center; padding: .8rem 1.25rem; border-radius: var(--border-radius); font-weight: 800; }
  .primary { background: var(--clr-primary-brown); color: white; }
  .primary:hover, .primary:focus-visible { background: #7f5539; }
  .secondary { color: white; border: 2px solid rgba(255,255,255,.75); }
  .section { margin-top: clamp(4rem, 8vw, 7rem); }
  .section-heading { max-width: 750px; margin-bottom: 2rem; }
  .section-heading h2, .brands h2, .final-cta h2 { font-size: clamp(1.8rem, 4vw, 3rem); line-height: 1.15; }
  .service-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; }
  .service-card { min-height: 190px; padding: 1.5rem; background: white; border-top: 4px solid var(--clr-primary-brown); border-radius: var(--border-radius); box-shadow: var(--light-shadow); display: flex; flex-direction: column; justify-content: space-between; transition: var(--transition); }
  .service-card:hover, .service-card:focus-visible { box-shadow: var(--dark-shadow); transform: translateY(-3px); }
  .service-card span { color: #7f5539; font-weight: 700; }
  .trust { background: var(--clr-secondary-brown); border-radius: 10px; padding: clamp(1.5rem, 5vw, 4rem); }
  .trust-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; }
  .trust article { background: rgba(255,255,255,.55); padding: 1.25rem; border-radius: var(--border-radius); }
  .trust svg { font-size: 1.7rem; color: #7f5539; margin-bottom: 1rem; }
  .trust h3 { font-size: 1rem; line-height: 1.35; }
  .brands { display: grid; grid-template-columns: 1fr 1.3fr; gap: 2rem; align-items: center; }
  .brands ul { display: grid; grid-template-columns: repeat(3, 1fr); gap: .75rem; }
  .brands li { background: white; padding: 1rem; border-radius: var(--border-radius); text-align: center; font-weight: 800; color: var(--clr-grey-3); }
  .final-cta { background: var(--clr-grey-1); color: white; border-radius: 10px; padding: clamp(1.5rem, 5vw, 4rem); display: flex; align-items: center; justify-content: space-between; gap: 2rem; }
  @media (max-width: 900px) { .service-grid, .trust-grid { grid-template-columns: repeat(2, 1fr); } .brands { grid-template-columns: 1fr; } }
  @media (max-width: 560px) { .hero { min-height: 31rem; } .overlay { background: rgba(20,24,27,.72); } .service-grid, .trust-grid, .brands ul { grid-template-columns: 1fr; } .final-cta { align-items: flex-start; flex-direction: column; } .final-cta .primary { width: 100%; } }
`

export default Hero
