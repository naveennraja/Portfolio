import html5 from "../../images/skills/html5.png"
import jsx from "../../images/skills/JSX.png"
import css from "../../images/skills/css3.png"
import bootstrap from "../../images/skills/bootstrap.png"
import reactBootstrap from "../../images/skills/reactBootstrap.png"
import sass from "../../images/skills/sass.png"
import javascript from "../../images/skills/javascript.png"
import typescript from "../../images/skills/typescript.png"
import jquery from "../../images/skills/jquery.png"
import react from "../../images/skills/react.png"
import angular from "../../images/skills/angular.png"
import nodejs from "../../images/skills/nodejs.png"
import amCharts from "../../images/skills/amCharts.png"
import greensock from "../../images/skills/greensock.png"
import gatsby from "../../images/skills/gatsby.png"
import mongodb from "../../images/skills/mongodb.png"
import visualStudio from "../../images/skills/visualStudio.png"
import Webstorm from "../../images/skills/Webstorm.png"
import cursor from "../../images/skills/cursor.png"
import BBEdit from "../../images/skills/BBEdit.png"

const commonImage = {
     html: {
          HTML: html5,
          JSX: jsx,
     },
     css: {
          CSS: css,
          Bootstrap: bootstrap,
          Sass: sass,
     },
     javascript: {
          JavaScript: javascript,
          TypeScript: typescript,
          React: react,
          Angular: angular,
          Node: nodejs,
          amCharts: amCharts,
          Gatsby: gatsby,
          MongoDB: mongodb,
     },
     tools: {
          "Visual Studio": visualStudio,
          Webstorm: Webstorm,
          Cursor: cursor,
     },
}

// Flat map of skill name → image src for use in ProjectsList
export const skills = {
     html5,
     jsx,
     css,
     bootstrap,
     sass,
     javascript,
     typescript,
     react,
     angular,
     nodejs,
     amCharts,
     gatsby,
     mongodb,
     visualStudio,
     Webstorm,
     cursor,
}

export default commonImage
