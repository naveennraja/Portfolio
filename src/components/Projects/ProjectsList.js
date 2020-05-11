import snowfall from "../../images/portfolio/snowfall.gif";
import customvideo from "../../images/portfolio/customvideo.gif";
import sandwich from "../../images/portfolio/sandwich.gif";
import streamlet from "../../images/portfolio/streamy.gif";
import thesis from "../../images/portfolio/thesis.gif";
import portfolio from "../../images/portfolio/portfolio.gif";
import dior from "../../images/portfolio/dior.gif";
import html5  from "../../images/skills/html5.png"; 
import css  from "../../images/skills/css3.png";
import bootstrap  from "../../images/skills/bootstrap.png";
import sass  from "../../images/skills/sass.png";
import javascript  from "../../images/skills/javascript.png";
import jquery  from "../../images/skills/jquery.png";
import react  from "../../images/skills/react.png";
import angular  from "../../images/skills/angular.png";
import nodejs  from "../../images/skills/nodejs.png";
import amCharts  from "../../images/skills/amCharts.png";
import gatsby  from "../../images/skills/gatsby.png";
import mongodb from "../../images/skills/mongodb.png";

const ProjectList ={
     "Dior":{
          "technologies" : [html5,css,javascript],
          "giphy":dior,
          "github":"https://github.com/naveennraja/Dior"
     },
     "Snowfall":{
          "technologies" : [html5,css,jquery],
          "giphy":snowfall,
          "github":"https://github.com/naveennraja/Dior"
     },
     "Custom Video":{
          "technologies" : [html5,css,javascript],
          "giphy":customvideo,
          "github":"https://github.com/naveennraja/HTML5_CustomVideo"
     },
     "Thesis on MWL":{
          "technologies" : [mongodb,angular,amCharts,nodejs],
          "giphy":thesis,
          "github":"https://github.com/naveennraja/ThesisonMWL"
     },
     "Portfolio":{
          "technologies" : [bootstrap,sass,react,amCharts,gatsby],
          "giphy":portfolio,
          "github":"https://github.com/naveennraja/Portfolio"
     },
     "Sandwich Builder": {
          "technologies" : [css,javascript,react],
          "giphy":sandwich,
          "github":"https://github.com/naveennraja/sandwich-builder"
     },
     "Stream let": {
          "technologies" : [javascript,react,nodejs],
          "giphy":streamlet,
          "github":"https://github.com/naveennraja/streamlet"
     },
}
export default ProjectList;