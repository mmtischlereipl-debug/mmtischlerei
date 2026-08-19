//i18next-extract-mark-ns-start offer-page
import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/Layout"
import { Trans, useTranslation, Link } from "gatsby-plugin-react-i18next"
import { FaArrowRight, FaComments, FaPencilRuler, FaTools, FaTruck } from "react-icons/fa"
import Category from "../components/Category"
import Seo from "../components/Seo"
import heroKitchen from "../images/modern-kitchen-hero.png"
import projectImage from "../images/project.jpg"

const Offer = ({ data }) => {
  const { allAirtable: { nodes: categories } } = data
  const { t } = useTranslation()
  const visibleCategories = categories.filter(category => category.data.title !== "Schody")

  return <>
    <Seo title={t("seo.offer.title")} description={t("seo.offer.description")} />
    <Layout data={data}>
      <Wrapper>
        <header className="offer-hero">
          <img src={heroKitchen} alt={t("Nowoczesne meble na wymiar")} />
          <div className="shade" />
          <div className="hero-copy"><p className="eyebrow"><Trans>Oferta M&M Tischlerei</Trans></p><h1><Trans>Meble dopasowane do Ciebie i Twojej przestrzeni</Trans></h1><p><Trans>Projektujemy, wykonujemy i montujemy kompletne zabudowy na wymiar — od pierwszego pomysłu po gotowe wnętrze.</Trans></p><Link to="/contact/#quote"><Trans>Umów bezpłatną wycenę</Trans><FaArrowRight /></Link></div>
        </header>

        <section className="categories section">
          <div className="section-heading"><div><p className="eyebrow"><Trans>Co wykonujemy</Trans></p><h2><Trans>Rozwiązania szyte na wymiar</Trans></h2></div><p><Trans>Każdy projekt dopasowujemy do układu pomieszczenia, potrzeb domowników i wybranego stylu.</Trans></p></div>
          <Category categories={visibleCategories} />
        </section>

        <section className="design section">
          <div className="design-image"><img src={projectImage} alt={t("Profesjonalny projekt 3D")} /></div>
          <div className="design-copy"><p className="eyebrow"><Trans>Projekt przed produkcją</Trans></p><h2><Trans>Zobacz swoje wnętrze, zanim powstanie</Trans></h2><p><Trans>Przygotowujemy czytelną koncepcję i wizualizację, dzięki której wspólnie dopracujemy układ, materiały, kolory oraz detale.</Trans></p><ul><li><Trans>Dokładne pomiary</Trans></li><li><Trans>Projekt dopasowany do budżetu</Trans></li><li><Trans>Dobór materiałów i okuć</Trans></li></ul><Link className="text-link" to="/contact/#quote"><Trans>Zapytaj o swój projekt</Trans><FaArrowRight /></Link></div>
        </section>

        <section className="process section">
          <div className="section-heading"><div><p className="eyebrow"><Trans>Od pomysłu do montażu</Trans></p><h2><Trans>Jedna pracownia, cały proces</Trans></h2></div></div>
          <div className="process-grid"><article><FaComments /><b>01</b><h3><Trans>Rozmowa</Trans></h3><p><Trans>Poznajemy Twoje potrzeby i oczekiwania.</Trans></p></article><article><FaPencilRuler /><b>02</b><h3><Trans>Projekt</Trans></h3><p><Trans>Planujemy funkcję, wygląd i materiały.</Trans></p></article><article><FaTools /><b>03</b><h3><Trans>Produkcja</Trans></h3><p><Trans>Wykonujemy meble z dbałością o każdy detal.</Trans></p></article><article><FaTruck /><b>04</b><h3><Trans>Montaż</Trans></h3><p><Trans>Dostarczamy i profesjonalnie montujemy.</Trans></p></article></div>
        </section>

        <section className="offer-cta"><div><p className="eyebrow"><Trans>Masz nietypowy pomysł?</Trans></p><h2><Trans>Porozmawiajmy o Twoim wnętrzu.</Trans></h2><p><Trans>Wykonujemy również indywidualne usługi stolarskie poza przedstawionymi kategoriami.</Trans></p></div><div><Link to="/contact/#quote"><Trans>Bezpłatna wycena</Trans><FaArrowRight /></Link><a href="tel:+48791756101">+48 791 756 101</a></div></section>
      </Wrapper>
    </Layout>
  </>
}

export const query = graphql`
  query allOffers($language: String) {
    allAirtable(sort: { fields: data___title, order: ASC } filter: { table: { eq: "Categories" } }) { nodes { data { title image { localFiles { childImageSharp { gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED) } } } } id } }
    locales: allLocale(filter: { ns: { in: ["translation", "offer-page"] } language: { eq: $language } }) { edges { node { ns data language } } }
  }
`

const Wrapper = styled.main`
  background:#f4f1ec;color:#181715;.eyebrow{text-transform:uppercase;letter-spacing:.18em;font-size:.72rem;font-weight:700;color:#b77554;margin-bottom:1rem}.section{width:92%;max-width:var(--max-width);margin:auto;padding:clamp(4.5rem,8vw,8rem) 0}.offer-hero{min-height:620px;position:relative;display:flex;align-items:center;overflow:hidden}.offer-hero>img,.shade{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}.shade{background:linear-gradient(90deg,rgba(8,8,8,.94),rgba(8,8,8,.68) 48%,rgba(8,8,8,.14))}.hero-copy{position:relative;z-index:1;width:92%;max-width:var(--max-width);margin:auto;color:white}.hero-copy>*{max-width:760px}.hero-copy h1,.section h2,.offer-cta h2{font-family:Georgia,serif;font-weight:400;letter-spacing:-.035em}.hero-copy h1{font-size:clamp(3.2rem,7vw,6.8rem);line-height:.98}.hero-copy p:not(.eyebrow){color:#ddd;font-size:1.08rem}.hero-copy a,.offer-cta a:first-child{display:inline-flex;align-items:center;gap:.8rem;background:#b77554;color:white;padding:1rem 1.3rem;font-weight:700}.section-heading{display:flex;justify-content:space-between;align-items:end;gap:3rem;margin-bottom:2.5rem}.section-heading h2,.design-copy h2{font-size:clamp(2.5rem,5vw,5rem);line-height:1}.section-heading>p{max-width:480px}.design{display:grid;grid-template-columns:1.15fr .85fr;gap:clamp(2rem,6vw,7rem);align-items:center;background:#161412;color:white;width:100%;max-width:none;padding-left:4%;padding-right:4%}.design-image img{width:100%;height:600px;object-fit:cover;opacity:.88}.design-copy{max-width:620px}.design-copy p{color:#bbb}.design-copy ul{margin:2rem 0;display:grid;gap:.7rem}.design-copy li{border-bottom:1px solid #413b36;padding-bottom:.7rem}.text-link{display:inline-flex;align-items:center;gap:.7rem;color:#d18b67;font-weight:700}.process-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1rem}.process article{border-top:1px solid #cdbfb3;padding:1.25rem 0}.process svg{color:#b77554;font-size:1.6rem}.process b{display:block;margin:1.2rem 0;color:#8b6c5e}.process h3{font-size:1.15rem}.process p{font-size:.86rem}.offer-cta{background:#171411;color:white;padding:clamp(3rem,7vw,7rem) 5%;display:flex;justify-content:space-around;align-items:center;gap:3rem}.offer-cta h2{font-size:clamp(2.6rem,5vw,5rem)}.offer-cta p{color:#bbb;max-width:620px}.offer-cta>div:last-child{display:flex;flex-wrap:wrap;align-items:center;gap:1.2rem}.offer-cta a{color:white;font-weight:700}
  @media(max-width:850px){.section-heading,.offer-cta{align-items:flex-start;flex-direction:column}.design{grid-template-columns:1fr}.design-image img{height:400px}.process-grid{grid-template-columns:1fr 1fr}}
  @media(max-width:520px){.offer-hero{min-height:680px}.shade{background:rgba(8,8,8,.72)}.process-grid{grid-template-columns:1fr}.design-image img{height:300px}}
`

export default Offer
