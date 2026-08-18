import React, { useState } from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Seo from "../components/Seo"
import { useTranslation, Trans } from "gatsby-plugin-react-i18next"
import Title from "../components/Title"
import GoogleMap from "../components/GoogleMap"
import { useLocation } from "@reach/router"

const Contact = ({ data }) => {
  const { t } = useTranslation()
  const [status, setStatus] = useState("idle")
  const { search } = useLocation()
  const relatedProject = new URLSearchParams(search).get("project") || ""

  const submitQuote = async event => {
    event.preventDefault()
    const endpoint = process.env.GATSBY_FORM_KEY
    if (!endpoint) { setStatus("config"); return }
    setStatus("sending")
    try {
      const response = await fetch(endpoint, { method: "POST", body: new FormData(event.currentTarget), headers: { Accept: "application/json" } })
      if (!response.ok) throw new Error("Submission failed")
      event.currentTarget.reset()
      setStatus("success")
    } catch (error) { setStatus("error") }
  }

  return (
    <>
      <Seo title={t("seo.contact.title")} description={t("seo.contact.description")} />
      <Layout data={data}>
        <Wrapper>
          <section className="contact-info">
            <Title title="Kontakt" />
            <p className="lead"><Trans>Porozmawiajmy o Twoim projekcie. Możesz zadzwonić, napisać lub przesłać dane do wstępnej wyceny.</Trans></p>
            <h3><Trans>Telefon (polski, niemiecki, angielski):</Trans></h3>
            <a href="tel:+48791756101">+48 791 756 101</a>
            <h3>E-mail:</h3><a href="mailto:mmtischlereipl@gmail.com">mmtischlereipl@gmail.com</a>
            <h3><Trans>Dane firmy:</Trans></h3>
            <p>M&M Tischlerei S.C. Tomasz Dolecki, Andrzej Abramczyk<br />66-620 Gubin, Polska<br />Kolonia Wałowice 74b</p>
            <a className="whatsapp" href="https://wa.me/48791756101" target="_blank" rel="noreferrer">WhatsApp</a>
          </section>

          <section id="quote" className="quote-section" aria-labelledby="quote-title">
            <form className="quote-form" action={process.env.GATSBY_FORM_KEY} method="POST" encType="multipart/form-data" onSubmit={submitQuote}>
              <div className="form-heading"><p><Trans>Wstępna wycena</Trans></p><h2 id="quote-title"><Trans>Opowiedz nam o swoim projekcie</Trans></h2><span><Trans>Pola oznaczone * są wymagane. Wymiary mogą być orientacyjne.</Trans></span></div>
              <div className="two-columns">
                <Field label="Imię *"><input name="name" autoComplete="name" required /></Field>
                <Field label="Telefon *"><input type="tel" name="phone" autoComplete="tel" required /></Field>
                <Field label="E-mail *"><input type="email" name="email" autoComplete="email" required /></Field>
                <Field label="Miejscowość / miejsce realizacji"><input name="location" autoComplete="address-level2" /></Field>
              </div>
              <Field label="Rodzaj projektu *">
                <select name="projectType" required defaultValue=""><option value="" disabled>{t("Wybierz rodzaj projektu")}</option><option>{t("Kuchnia")}</option><option>{t("Szafa")}</option><option>{t("Garderoba")}</option><option>{t("Meble łazienkowe")}</option><option>{t("Meble do salonu")}</option><option>{t("Meble biurowe")}</option><option>{t("Meble dla firmy / lokalu")}</option><option>{t("Inne")}</option></select>
              </Field>
              {relatedProject && <Field label="Wybrana realizacja"><input name="relatedProject" value={relatedProject} readOnly /></Field>}
              <fieldset><legend><Trans>Orientacyjne wymiary (opcjonalnie)</Trans></legend><div className="three-columns"><Field label="Szerokość (cm)"><input type="number" min="0" name="width" inputMode="decimal" /></Field><Field label="Wysokość (cm)"><input type="number" min="0" name="height" inputMode="decimal" /></Field><Field label="Głębokość (cm)"><input type="number" min="0" name="depth" inputMode="decimal" /></Field></div></fieldset>
              <Field label="Preferowany materiał"><select name="material" defaultValue="advice"><option value="laminated">{t("Płyta laminowana")}</option><option value="acrylic">{t("Fronty akrylowe")}</option><option value="mdf">{t("MDF lakierowany")}</option><option value="veneer">{t("Fornir")}</option><option value="advice">{t("Nie wiem — proszę o doradztwo")}</option></select></Field>
              <Field label="Zdjęcia, inspiracje, szkice lub PDF"><input className="file" type="file" name="attachments" accept="image/jpeg,image/png,image/webp,application/pdf" multiple /><small><Trans>Możesz dodać kilka plików JPG, PNG, WEBP lub PDF.</Trans></small></Field>
              <Field label="Krótki opis / dodatkowe informacje"><textarea name="message" rows="6" /></Field>
              <label className="consent"><input type="checkbox" name="privacyConsent" required /> <Trans>Zgadzam się na wykorzystanie podanych danych w celu obsługi mojego zapytania.</Trans></label>
              <button className="submit" type="submit" disabled={status === "sending"}><Trans>{status === "sending" ? "Wysyłanie…" : "Wyślij zapytanie"}</Trans></button>
              <div className="status" role="status" aria-live="polite">
                {status === "success" && <p className="success"><Trans>Dziękujemy. Twoje zapytanie zostało wysłane.</Trans></p>}
                {status === "error" && <p className="error"><Trans>Nie udało się wysłać formularza. Spróbuj ponownie lub skontaktuj się telefonicznie.</Trans></p>}
                {status === "config" && <p className="error"><Trans>Formularz wymaga konfiguracji. Skontaktuj się z nami telefonicznie lub przez WhatsApp.</Trans></p>}
              </div>
            </form>
          </section>
          <GoogleMap />
        </Wrapper>
      </Layout>
    </>
  )
}

const Field = ({ label, children }) => <label className="field"><span><Trans>{label}</Trans></span>{children}</label>

export const query = graphql`query ($language: String!) { locales: allLocale(filter: { ns: { in: ["translation", "contact-page"] } language: { eq: $language } }) { edges { node { ns data language } } } }`

const Wrapper = styled.div`
  width: 95%; max-width: var(--max-width); margin: 0 auto; display: grid; grid-template-columns: minmax(260px,.7fr) minmax(0,1.5fr); gap: clamp(2rem,5vw,5rem);
  .contact-info { padding-top: 1rem; } .contact-info h3 { margin: 1.5rem 0 .35rem; font-size: 1rem; } .contact-info a { font-size: 1.05rem; font-weight: 700; color: #7f5539; } .lead { font-size: 1.1rem; }
  .whatsapp { display: inline-flex; margin-top: 1.5rem; background: #187b3f; color: white !important; padding: .75rem 1rem; border-radius: var(--border-radius); }
  .quote-section { scroll-margin-top: 1rem; }
  .quote-form { background: white; box-shadow: var(--light-shadow); border-top: 5px solid var(--clr-primary-brown); border-radius: var(--border-radius); padding: clamp(1.25rem,4vw,3rem); }
  .form-heading { margin-bottom: 2rem; } .form-heading p { color: #7f5539; font-weight: 800; text-transform: uppercase; letter-spacing: .12em; margin-bottom: .5rem; } .form-heading h2 { font-size: clamp(1.8rem,4vw,2.8rem); } .form-heading span { color: var(--clr-grey-4); }
  .two-columns, .three-columns { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; } .three-columns { grid-template-columns: repeat(3,1fr); }
  .field { display: block; margin-bottom: 1.15rem; } .field > span, legend { display: block; font-weight: 700; margin-bottom: .35rem; }
  input, select, textarea { width: 100%; min-height: 48px; padding: .7rem; border: 1px solid var(--clr-grey-8); border-radius: var(--border-radius); font: inherit; background: var(--clr-grey-10); } textarea { resize: vertical; } input:focus, select:focus, textarea:focus { outline: 3px solid rgba(176,137,104,.25); border-color: #7f5539; }
  fieldset { border: 0; margin: .5rem 0 1rem; } .file { padding: .55rem; background: white; } small { display: block; margin-top: .35rem; color: var(--clr-grey-4); }
  .consent { display: flex; gap: .7rem; align-items: flex-start; margin: 1rem 0; } .consent input { width: 22px; min-height: 22px; flex: 0 0 auto; }
  .submit { width: 100%; min-height: 52px; border: 0; border-radius: var(--border-radius); background: var(--clr-primary-brown); color: white; font: inherit; font-weight: 800; cursor: pointer; } .submit:hover { background: #7f5539; } .submit:disabled { opacity: .65; }
  .status p { margin: 1rem 0 0; padding: .8rem; border-radius: var(--border-radius); } .success { background: #e7f6ea; color: #145a27; } .error { background: #fdeaea; color: #8b1e1e; }
  > div:last-child { grid-column: 1/-1; }
  @media(max-width:850px){ grid-template-columns:1fr; .two-columns { grid-template-columns:1fr; } }
  @media(max-width:520px){ .three-columns { grid-template-columns:1fr; } }
`

export default Contact
