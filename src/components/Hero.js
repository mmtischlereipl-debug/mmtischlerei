import React from "react"
import styled from "styled-components"
import { Link, Trans } from "gatsby-plugin-react-i18next"
import { FaArrowRight, FaRulerCombined, FaPencilRuler, FaTools, FaTruck } from "react-icons/fa"
import heroKitchen from "../images/modern-kitchen-hero.png"
import wardrobe from "../images/inspiration-wardrobe.png"
import livingRoom from "../images/inspiration-living-room.png"
import bathroom from "../images/inspiration-bathroom.png"

const services = [
  ["01", "Kuchnie na wymiar", "Funkcjonalne, piękne i dopracowane."],
  ["02", "Garderoby i szafy", "Maksimum miejsca, perfekcyjny porządek."],
  ["03", "Zabudowy wnęk", "Idealnie dopasowane do przestrzeni."],
  ["04", "Meble do salonu i biura", "Styl i komfort na co dzień."],
]

const Hero = () => (
  <Wrapper>
    <section className="hero">
      <img src={heroKitchen} alt="Nowoczesna kuchnia na wymiar w drewnie i graficie" />
      <div className="hero-shade" />
      <div className="hero-copy">
        <p className="eyebrow"><Trans>Meble na wymiar · projekt · produkcja · montaż</Trans></p>
        <h1><Trans>Meble tworzone dla Twojej przestrzeni</Trans></h1>
        <p className="lead"><Trans>Od projektu po perfekcyjny montaż</Trans></p>
        <p><Trans>Tworzymy wnętrza, które łączą precyzję rzemiosła, nowoczesny design i trwałość na lata.</Trans></p>
        <div className="actions">
          <Link className="primary" to="/contact/#quote"><Trans>Umów bezpłatną wycenę</Trans><FaArrowRight /></Link>
          <a className="phone" href="tel:+48791756101">+48 791 756 101</a>
        </div>
      </div>
    </section>

    <section className="intro section">
      <div className="intro-copy">
        <p className="eyebrow">M&M Tischlerei</p>
        <h2><Trans>Rzemiosło. Design. Precyzja.</Trans></h2>
        <p><Trans>Projektujemy zabudowy, które wykorzystują każdy centymetr i naturalnie wpisują się w rytm Twojego domu.</Trans></p>
        <Link className="text-link" to="/offer/"><Trans>Poznaj naszą ofertę</Trans><FaArrowRight /></Link>
      </div>
      <div className="intro-images">
        <img className="large" src={livingRoom} alt="Nowoczesna zabudowa salonu" />
        <img src={wardrobe} alt="Garderoba na wymiar" />
      </div>
    </section>

    <section className="services section">
      <div className="service-image"><img src={wardrobe} alt="Detal zabudowy garderoby" /></div>
      <div className="service-content">
        <p className="eyebrow"><Trans>Nasza oferta</Trans></p>
        <h2><Trans>Meble, które pracują dla Ciebie.</Trans></h2>
        <div className="service-list">
          {services.map(([number, title, description]) => (
            <Link to="/offer/" key={number} className="service-row">
              <span>{number}</span><div><h3><Trans>{title}</Trans></h3><p><Trans>{description}</Trans></p></div><FaArrowRight />
            </Link>
          ))}
        </div>
      </div>
    </section>

    <section className="projects section">
      <div className="section-title"><div><p className="eyebrow"><Trans>Galeria inspiracji</Trans></p><h2><Trans>Pomysły na nowoczesne wnętrza</Trans></h2></div><Link className="text-link" to="/gallery/"><Trans>Zobacz wszystkie</Trans><FaArrowRight /></Link></div>
      <div className="project-grid">
        <Link to="/gallery/"><img src={heroKitchen} alt="Nowoczesna kuchnia" /><span><Trans>Kuchnie</Trans></span></Link>
        <Link to="/gallery/"><img src={livingRoom} alt="Zabudowa salonu" /><span><Trans>Salony</Trans></span></Link>
        <Link to="/gallery/"><img src={bathroom} alt="Meble łazienkowe" /><span><Trans>Łazienki</Trans></span></Link>
      </div>
    </section>

    <section className="process section">
      <div><p className="eyebrow"><Trans>Nasz proces</Trans></p><h2><Trans>Jak pracujemy</Trans></h2></div>
      <div className="process-grid">
        <article><FaRulerCombined /><b>01</b><h3><Trans>Rozmowa i pomiary</Trans></h3><p><Trans>Poznajemy Twoje potrzeby i przestrzeń.</Trans></p></article>
        <article><FaPencilRuler /><b>02</b><h3><Trans>Projekt i wizualizacja</Trans></h3><p><Trans>Tworzymy rozwiązania dopasowane do Ciebie.</Trans></p></article>
        <article><FaTools /><b>03</b><h3><Trans>Produkcja</Trans></h3><p><Trans>Precyzyjne wykonanie w naszej pracowni.</Trans></p></article>
        <article><FaTruck /><b>04</b><h3><Trans>Montaż</Trans></h3><p><Trans>Czysto, terminowo i bez kompromisów.</Trans></p></article>
      </div>
    </section>

    <section className="final-cta section">
      <div><p className="eyebrow"><Trans>Twój projekt zaczyna się tutaj</Trans></p><h2><Trans>Umów bezpłatną wycenę</Trans></h2><p><Trans>Opowiedz nam o swojej przestrzeni. Przygotujemy indywidualną propozycję.</Trans></p></div>
      <div><Link className="primary" to="/contact/#quote"><Trans>Porozmawiajmy</Trans><FaArrowRight /></Link><a className="phone" href="tel:+48791756101">+48 791 756 101</a></div>
    </section>
  </Wrapper>
)

const Wrapper = styled.div`
  background:#f4f1ec;color:#181715;
  .section{max-width:var(--max-width);width:92%;margin:0 auto;padding:clamp(4.5rem,8vw,8rem) 0}.eyebrow{text-transform:uppercase;letter-spacing:.18em;font-size:.72rem;font-weight:700;color:#b77554;margin-bottom:1rem}.hero{min-height:clamp(560px,78vh,820px);position:relative;display:flex;align-items:center;overflow:hidden}.hero>img,.hero-shade{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}.hero-shade{background:linear-gradient(90deg,rgba(8,8,8,.94) 0%,rgba(8,8,8,.7) 43%,rgba(8,8,8,.08) 78%)}.hero-copy{position:relative;z-index:1;width:92%;max-width:var(--max-width);margin:auto;color:white;padding:6rem 0}.hero-copy>*{max-width:690px}.hero h1,.section h2{font-family:Georgia,serif;font-weight:400;letter-spacing:-.035em}.hero h1{font-size:clamp(3rem,7vw,6.6rem);line-height:.98;margin-bottom:1.25rem}.hero .lead{font-size:clamp(1.25rem,2.2vw,2rem);color:white}.hero-copy p{color:#ddd;font-size:1.08rem}.actions,.final-cta>div:last-child{display:flex;align-items:center;flex-wrap:wrap;gap:1.25rem;margin-top:2rem}.primary{display:inline-flex;align-items:center;gap:.8rem;background:#b77554;color:white;padding:1rem 1.35rem;font-weight:700;transition:.25s}.primary:hover{background:#ca8663;transform:translateY(-2px)}.phone{color:inherit;font-weight:700}.section h2{font-size:clamp(2.4rem,5vw,5rem);line-height:1.02}.intro{display:grid;grid-template-columns:.75fr 1.75fr;gap:clamp(2rem,6vw,7rem);align-items:center}.intro-copy p:not(.eyebrow){font-size:1.05rem;max-width:460px}.text-link{display:inline-flex;align-items:center;gap:.7rem;color:#9d5f41;font-weight:700;border-bottom:1px solid #b77554;padding-bottom:.35rem}.intro-images{display:grid;grid-template-columns:1.6fr .75fr;gap:1rem}.intro-images img{width:100%;height:420px;object-fit:cover}.intro-images img:not(.large){height:280px;align-self:end}.services{max-width:none;width:100%;display:grid;grid-template-columns:1fr 2fr;background:#121110;color:white;padding:0}.service-image img{height:100%;min-height:620px;object-fit:cover}.service-content{padding:clamp(3rem,7vw,7rem)}.service-content h2{max-width:600px}.service-list{margin-top:2.5rem}.service-row{display:grid;grid-template-columns:60px 1fr 24px;gap:1rem;align-items:center;color:white;border-top:1px solid #403b36;padding:1.15rem 0}.service-row>span{font-family:Georgia,serif;font-size:1.7rem;color:#b77554}.service-row h3{font-size:1rem;margin:0}.service-row p{font-size:.8rem;color:#aaa;margin:.25rem 0 0}.section-title{display:flex;align-items:end;justify-content:space-between;gap:2rem}.project-grid{display:grid;grid-template-columns:1.15fr 1.15fr .7fr;gap:.8rem;margin-top:2rem}.project-grid a{position:relative;overflow:hidden;min-height:430px}.project-grid img{height:100%;object-fit:cover;transition:.5s}.project-grid a:hover img{transform:scale(1.025)}.project-grid span{position:absolute;left:1rem;bottom:1rem;background:rgba(12,12,12,.78);color:white;padding:.6rem .8rem}.process{display:grid;grid-template-columns:.7fr 2fr;gap:4rem}.process-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1rem}.process article{border-top:1px solid #c9b9aa;padding-top:1.2rem}.process svg{color:#b77554;font-size:1.4rem}.process b{display:block;margin:1rem 0;color:#8b6c5e}.process h3{font-size:1rem}.process p{font-size:.82rem}.final-cta{max-width:none;width:100%;background:#1a1714;color:white;display:flex;justify-content:space-around;align-items:center;gap:3rem}.final-cta p{color:#cfc7bf;max-width:600px}.final-cta h2{font-size:clamp(2.5rem,5vw,4.8rem)}
  @media(max-width:900px){.intro,.process{grid-template-columns:1fr}.services{grid-template-columns:1fr}.service-image{max-height:420px}.service-image img{min-height:0}.process-grid{grid-template-columns:repeat(2,1fr)}.project-grid{grid-template-columns:1fr 1fr}.project-grid a:last-child{grid-column:span 2;min-height:330px}.final-cta{align-items:flex-start;flex-direction:column}}
  @media(max-width:600px){.hero{min-height:680px}.hero-shade{background:rgba(8,8,8,.7)}.intro-images{grid-template-columns:1fr}.intro-images img,.intro-images img:not(.large){height:280px}.project-grid{grid-template-columns:1fr}.project-grid a,.project-grid a:last-child{grid-column:auto;min-height:300px}.process-grid{grid-template-columns:1fr}.section-title{align-items:flex-start;flex-direction:column}}
`

export default Hero
