import portfolio from "../../images/portfolio/portfolio.gif"
import saffronisle from "../../images/portfolio/saffronisle.png"
import productscan from "../../images/portfolio/productscan.gif"
import { skills } from "../Skills/SkillList"

const { html5, css, javascript, react, gatsby, typescript, nodejs } = skills

const ProjectList = {
     "Saffron Isle": {
          description:
               "A publishing pipeline that turns Word documents into a deployed static blog for a non-technical author — atomic multi-file commits via the GitHub Git Data API to avoid partial-deploy states, HMAC-signed sessions with constant-time auth, and 125 tests built on real in-memory OOXML/PNG fixtures.",
          technologies: [typescript, react, nodejs],
          giphy: saffronisle,
          github: "https://github.com/naveennraja/SaffronIsle",
          preview: "https://saffronisle.com/",
     },
     "Audit Management Platform": {
          description:
               "A multi-role web application for creating and managing audits across an organisation. Users can assign auditors, track findings, and approve, reject or reissue assets — with role-based access controlling what each user can see and action. Supports organisations ranging from 5 to 100+ users.",
          technologies: [react, html5, css, javascript],
          giphy: null,
          github: null,
          private: true,
     },
     "Product Scan PWA": {
          description:
               "A progressive web app used in the field to carry out audits. Auditors capture photos and GPS location per asset with full offline support — data is stored locally via IndexedDB and syncs automatically once connectivity is restored.",
          technologies: [react, html5, css, javascript],
          giphy: productscan,
          github: "https://github.com/naveennraja/pwa-productscan",
     },
     "Product Funding Platform": {
          description:
               "A workflow-driven platform for funding products. Users search product availability, submit detailed funding requests, and route submissions through a role-based verification and approval process. Supports organisations from 5 to 100+ users.",
          technologies: [react, html5, css, javascript],
          giphy: null,
          github: null,
          private: true,
     },
     "Portfolio (2025)": {
          description:
               "This site — built with Gatsby and MUI, with a custom theme system, dark mode, and scroll-aware navigation.",
          technologies: [react, gatsby, css],
          giphy: portfolio,
          github: "https://github.com/naveennraja/Portfolio",
          preview: "https://naveennraja.github.io/Portfolio",
     },
}

export default ProjectList
