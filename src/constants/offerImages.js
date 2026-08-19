import wardrobe from "../images/inspiration-wardrobe.png"
import office from "../images/offer-office.png"
import kitchen from "../images/modern-kitchen-hero.png"
import attic from "../images/offer-attic.png"
import bathroom from "../images/inspiration-bathroom.png"
import installation from "../images/offer-installation.png"

const normalize = value =>
  value
    .toLocaleLowerCase("pl")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")

export const getOfferImage = title => {
  const normalizedTitle = normalize(title || "")

  if (normalizedTitle.includes("garderob")) return wardrobe
  if (normalizedTitle.includes("biurow")) return office
  if (normalizedTitle.includes("kuchenn")) return kitchen
  if (normalizedTitle.includes("poddasz") || normalizedTitle.includes("skos")) return attic
  if (normalizedTitle.includes("lazien")) return bathroom
  if (normalizedTitle.includes("montaz") || normalizedTitle.includes("stolarsk")) return installation

  return null
}
