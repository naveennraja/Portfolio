import snowfall from "../../images/portfolio/snowfall.gif"
import customvideo from "../../images/portfolio/customvideo.gif"
import sandwich from "../../images/portfolio/sandwich.gif"
import streamlet from "../../images/portfolio/streamy.gif"
import thesis from "../../images/portfolio/thesis.gif"
import portfolio from "../../images/portfolio/portfolio.gif"
import dior from "../../images/portfolio/dior.gif"
import productscan from "../../images/portfolio/productscan.gif"
import { skills } from "../Skills/SkillList"

const {
     html5,
     css,
     javascript,
     jquery,
     react,
     angular,
     nodejs,
     amCharts,
     gatsby,
     mongodb,
} = skills

const ProjectList = {
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
          github: null,
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
          technologies: [react, gatsby, css],
          giphy: portfolio,
          github: "https://github.com/naveennraja/Portfolio",
          preview: "https://naveennraja.github.io/Portfolio",
     },
     "Thesis on MWL": {
          technologies: [mongodb, angular, amCharts, nodejs],
          giphy: thesis,
          github: "https://github.com/naveennraja/ThesisonMWL",
     },
     "Sandwich Builder": {
          technologies: [css, javascript, react],
          giphy: sandwich,
          github: "https://github.com/naveennraja/sandwich-builder",
     },
     "Stream let": {
          technologies: [javascript, react, nodejs],
          giphy: streamlet,
          github: "https://github.com/naveennraja/streamlet",
     },
     Dior: {
          technologies: [html5, css, javascript],
          giphy: dior,
          github: "https://github.com/naveennraja/Dior",
     },
     Snowfall: {
          technologies: [html5, css, jquery],
          giphy: snowfall,
          github: "https://github.com/naveennraja/Snowfall",
     },
     "Custom Video": {
          technologies: [html5, css, javascript],
          giphy: customvideo,
          github: "https://github.com/naveennraja/HTML5_CustomVideo",
     },
}

export default ProjectList
