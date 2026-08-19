//i18next-extract-mark-ns-start gallery-page
import React, { useContext, useState } from "react"
import { useTranslation, Trans, Link } from "gatsby-plugin-react-i18next"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styled from "styled-components"
import Seo from "../components/Seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import GalleryImg from "../components/GalleryImg"
import { GatsbyContext } from "../context/context"
import { FaArrowRight, FaTimes } from "react-icons/fa"
import kitchen from "../images/modern-kitchen-hero.png"
import wardrobe from "../images/inspiration-wardrobe.png"
import livingRoom from "../images/inspiration-living-room.png"
import bathroom from "../images/inspiration-bathroom.png"

const inspirations = [
  { id: "inspiration-kitchen", title: "Nowoczesna kuchnia", category: "kuchnia", src: kitchen },
  { id: "inspiration-wardrobe", title: "Garderoba premium", category: "garderoba", src: wardrobe },
  { id: "inspiration-living", title: "Zabudowa salonu", category: "salon", src: livingRoom },
  { id: "inspiration-bathroom", title: "Łazienka w drewnie", category: "łazienka", src: bathroom },
]

const Gallery = ({ data }) => {
  const gallery = data.allAirtableGallery.nodes.filter(item => item?.data?.title && item?.data?.image?.localFiles?.[0])
  const { t } = useTranslation()
  const { selectImage, handleSelectImage } = useContext(GatsbyContext)
  const [filter, setFilter] = useState("all")
  const [selectedInspiration, setSelectedInspiration] = useState(null)
  const categories = ["all", "inspiracje", ...new Set(gallery.map(item => item.data.title).filter(Boolean))]
  const showInspirations = filter === "all" || filter === "inspiracje"
  const visibleGallery = filter === "all" || filter === "inspiracje" ? (filter === "inspiracje" ? [] : gallery) : gallery.filter(item => item.data.title === filter)

  return (
    <>
      <Seo title={t("seo.gallery.title")} description={t("seo.gallery.description")} />
      <Layout data={data}>
        <Wrapper>
          <header className="gallery-hero">
            <p className="eyebrow"><Trans>Galeria inspiracji</Trans></p>
            <h1><Trans>Pomysły na wnętrza z charakterem</Trans></h1>
            <p><Trans>Odkryj nowoczesne wizualizacje i pomysły, które mogą stać się punktem wyjścia dla Twojego indywidualnego projektu.</Trans></p>
          </header>

          <div className="filters" aria-label={t("Filtr realizacji")}>{categories.map(category => (
            <button key={category} type="button" className={filter === category ? "active" : ""} onClick={() => setFilter(category)} aria-pressed={filter === category}>
              {category === "all" ? t("Wszystkie") : <Trans>{category}</Trans>}
            </button>
          ))}</div>

          {selectImage && <GalleryImg dataSelected={selectImage} data={gallery} />}
          {selectedInspiration && (
            <div className="inspiration-modal" role="dialog" aria-modal="true" aria-label={selectedInspiration.title}>
              <button className="modal-bg" onClick={() => setSelectedInspiration(null)} aria-label="Zamknij" />
              <div className="modal-content"><button className="close" onClick={() => setSelectedInspiration(null)} aria-label="Zamknij"><FaTimes /></button><img src={selectedInspiration.src} alt={selectedInspiration.title} /><div><span><Trans>Wizualizacja inspiracyjna</Trans></span><h2>{selectedInspiration.title}</h2><Link to={`/contact/?project=${encodeURIComponent(selectedInspiration.title)}#quote`}><Trans>Chcę podobny projekt</Trans><FaArrowRight /></Link></div></div>
            </div>
          )}

          {showInspirations && <section className="inspirations" aria-labelledby="inspirations-title">
            <div className="section-title"><div><p className="eyebrow"><Trans>Nowe kierunki</Trans></p><h2 id="inspirations-title"><Trans>Inspiracje projektowe</Trans></h2></div><p><Trans>Wizualizacje pokazują możliwości stylistyczne i nie są fotografiami wykonanych realizacji.</Trans></p></div>
            <div className="inspiration-grid">{inspirations.map((item, index) => (
              <button key={item.id} className={`inspiration-card card-${index + 1}`} onClick={() => setSelectedInspiration(item)}><img src={item.src} alt={item.title} /><span><small><Trans>Wizualizacja</Trans></small>{item.title}</span></button>
            ))}</div>
          </section>}

          {visibleGallery.length > 0 && <section className="realizations" aria-labelledby="realizations-title">
            <div className="section-title"><div><p className="eyebrow"><Trans>Więcej pomysłów</Trans></p><h2 id="realizations-title"><Trans>Galeria wnętrz</Trans></h2></div><p><Trans>Materiały prezentowane w tej sekcji służą jako inspiracja do rozmowy o Twoim projekcie.</Trans></p></div>
            <div className="gallery-container">{visibleGallery.map((item, index) => {
              const { title, image } = item.data
              return <button className={`img-container tile-${(index % 5) + 1}`} key={item.id} onClick={() => handleSelectImage(item)}>
                <GatsbyImage image={getImage(image.localFiles[0])} alt={title} className="img" />
                <div className="img-info"><small><Trans>Inspiracja</Trans></small><h3><Trans i18nKey={title}>{title}</Trans></h3><FaArrowRight /></div>
              </button>
            })}</div>
          </section>}

          <section className="gallery-cta"><div><p className="eyebrow"><Trans>Masz własny pomysł?</Trans></p><h2><Trans>Zaprojektujmy go razem.</Trans></h2></div><Link to="/contact/#quote"><Trans>Umów bezpłatną wycenę</Trans><FaArrowRight /></Link></section>
        </Wrapper>
      </Layout>
    </>
  )
}

export const query = graphql`
  query AllGallery($language: String) {
    allAirtableGallery(sort: { fields: data___Created, order: DESC }) { nodes { data { title image { localFiles { childImageSharp { gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED) } } } } id } }
    locales: allLocale(filter: { ns: { in: ["translation", "gallery-page"] } language: { eq: $language } }) { edges { node { ns data language } } }
  }
`

const Wrapper = styled.main`
  background:#f4f1ec;color:#181715;min-height:100vh;padding-bottom:5rem;.eyebrow{text-transform:uppercase;letter-spacing:.18em;font-size:.72rem;font-weight:700;color:#b77554;margin-bottom:1rem}.gallery-hero{background:#141210;color:white;padding:clamp(5rem,10vw,9rem) 4%;text-align:center}.gallery-hero h1,.section-title h2,.gallery-cta h2{font-family:Georgia,serif;font-weight:400;letter-spacing:-.035em}.gallery-hero h1{font-size:clamp(3rem,7vw,6.5rem);line-height:1;max-width:1000px;margin:auto}.gallery-hero>p:last-child{color:#bbb;max-width:720px;margin:1.5rem auto 0;font-size:1.05rem}.filters{display:flex;flex-wrap:wrap;justify-content:center;gap:.4rem;padding:2rem 4%;background:#1a1816}.filters button{min-height:44px;padding:.65rem 1rem;border:1px solid #4a423c;background:transparent;color:#ddd;font:inherit;cursor:pointer;text-transform:capitalize}.filters button.active,.filters button:hover{background:#b77554;border-color:#b77554;color:white}.inspirations,.realizations{width:92%;max-width:var(--max-width);margin:auto;padding:clamp(4rem,8vw,7rem) 0}.section-title{display:flex;justify-content:space-between;align-items:end;gap:2rem;margin-bottom:2rem}.section-title h2{font-size:clamp(2.5rem,5vw,5rem)}.section-title>p{max-width:480px}.inspiration-grid{display:grid;grid-template-columns:1.2fr .8fr .8fr;grid-auto-rows:260px;gap:.75rem}.inspiration-card{position:relative;border:0;padding:0;overflow:hidden;cursor:pointer;background:#111}.inspiration-card:first-child{grid-row:span 2}.inspiration-card:last-child{grid-column:span 2}.inspiration-card img{width:100%;height:100%;object-fit:cover;transition:.5s}.inspiration-card:hover img{transform:scale(1.025);opacity:.78}.inspiration-card>span{position:absolute;left:1rem;bottom:1rem;text-align:left;background:rgba(14,12,11,.84);color:white;padding:.7rem 1rem;font-size:1rem}.inspiration-card small,.img-info small{display:block;color:#d18b67;text-transform:uppercase;letter-spacing:.12em;font-size:.62rem}.realizations{border-top:1px solid #d8cec4}.gallery-container{display:grid;grid-template-columns:repeat(3,1fr);grid-auto-rows:300px;grid-auto-flow:dense;gap:.75rem}.img-container{position:relative;border:0;padding:0;overflow:hidden;cursor:pointer;background:#111}.img-container:nth-child(5n+1){grid-column:span 2}.img-container:nth-child(7n){grid-row:span 2}.img-container .img{width:100%;height:100%;transition:.45s}.img-container:hover .img{transform:scale(1.025);opacity:.72}.img-info{position:absolute;inset:auto 0 0;padding:3rem 1rem 1rem;text-align:left;color:white;background:linear-gradient(transparent,rgba(0,0,0,.9));display:grid;grid-template-columns:1fr auto;align-items:end;opacity:.9}.img-info small{grid-column:1/-1}.img-info h3{font-family:Georgia,serif;font-weight:400;text-transform:capitalize;margin:.3rem 0 0}.gallery-cta{width:92%;max-width:var(--max-width);margin:auto;background:#171411;color:white;padding:clamp(2rem,5vw,5rem);display:flex;align-items:center;justify-content:space-between;gap:2rem}.gallery-cta h2{font-size:clamp(2.4rem,5vw,4.8rem)}.gallery-cta a,.modal-content a{display:inline-flex;align-items:center;gap:.8rem;background:#b77554;color:white;padding:1rem 1.2rem;font-weight:700}.inspiration-modal{position:fixed;inset:0;z-index:2200;display:grid;place-items:center;padding:1rem}.modal-bg{position:absolute;inset:0;width:100%;height:100%;border:0;background:rgba(0,0,0,.82)}.modal-content{position:relative;z-index:1;background:#171411;color:white;width:min(1100px,95vw);max-height:92vh;display:grid;grid-template-columns:1.7fr 1fr;overflow:auto}.modal-content img{width:100%;height:100%;min-height:420px;object-fit:cover}.modal-content>div{padding:clamp(1.5rem,4vw,3.5rem);align-self:center}.modal-content h2{font-family:Georgia,serif;font-size:clamp(2rem,4vw,4rem);font-weight:400}.modal-content span{color:#d18b67;text-transform:uppercase;letter-spacing:.12em}.close{position:absolute;right:.75rem;top:.75rem;z-index:2;width:44px;height:44px;border:0;background:#b77554;color:white;cursor:pointer}
  @media(max-width:800px){.section-title,.gallery-cta{align-items:flex-start;flex-direction:column}.inspiration-grid{grid-template-columns:1fr 1fr}.inspiration-card:first-child{grid-column:span 2}.inspiration-card:last-child{grid-column:span 2}.gallery-container{grid-template-columns:1fr 1fr}.modal-content{grid-template-columns:1fr}.modal-content img{min-height:280px}.modal-content>div{padding:1.5rem}}
  @media(max-width:520px){.inspiration-grid,.gallery-container{grid-template-columns:1fr}.inspiration-card:first-child,.inspiration-card:last-child,.img-container:nth-child(5n+1){grid-column:auto}.inspiration-card{min-height:280px}.gallery-container{grid-auto-rows:280px}.img-container:nth-child(7n){grid-row:auto}}
`

export default Gallery
