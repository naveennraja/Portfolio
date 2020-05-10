import React from "react"
import About from "../components/About";
import Skills from "../components/Skills/Skills";
import Contact from "../components/Contacts";
import Journey from "../components/Journey/Journey";
import Projects from "../components/Projects/Projects";
import MainLayout from "../components/MainLayout";
import SEO from "../components/gatsby-components/seo"


export default class IndexPage extends React.Component {
  render() {
    return (
      <MainLayout>
          <SEO title="Home"/>
          <About/>        
          <Journey/>
          <Skills/>
          <Projects/>
          <Contact/>
      </MainLayout>
    )
  }
}