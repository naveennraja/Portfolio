import About from '../components/About'
import Highlights from '../components/Highlights'
import Stats from '../components/Stats'
import Skills from '../components/Skills/Skills'
import Contact from '../components/Contacts'
import Journey from '../components/Journey/Journey'
import Projects from '../components/Projects/Projects'
import Quotes from '../components/Quotes'
import MainLayout from '../components/MainLayout'
import SEO from '../components/gatsby-components/seo'

export function Head() {
  return <SEO title="Home" />
}

export default function IndexPage() {
  return (
    <MainLayout>
      <Highlights />
      <Stats />
      <About />
      <Journey />
      <Skills />
      <Projects />
      <Quotes />
      <Contact />
    </MainLayout>
  )
}
