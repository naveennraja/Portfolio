import React from "react"
import Scrollspy from "react-scrollspy"
import { Navbar, Nav } from "react-bootstrap"
import Scroller from '../gatsby-components/scroller'
import Avatar from "../../images/Avatar.jpg";
export default class Header extends React.Component {
  constructor(props) {
    super(props);
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this);
  }
  render() {
    return (
      <>
        <Navbar className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav" expand="lg"
                collapseOnSelect={true}>
          <div className="container">
            <a className="navbar-brand js-scroll-trigger" href="#page-top" onClick={Scroller.handleAnchorScroll}>Naveen Raja</a>
            <Navbar.Toggle aria-controls="navbarResponsive"/>
            <Navbar.Collapse id="navbarResponsive">
              <Nav className="navbar-nav ml-auto my-2 my-lg-0">
                <Scrollspy className="navbar-nav"
                           items={["about", "experience","skills","projects", "contact"]}
                           currentClassName="active" rootEl={"#mainNav"} offset={-200}>
                  <li className="nav-item">
                    <Nav.Link className={"js-scroll-trigger about"} href="#about" onClick={Scroller.handleAnchorScroll}>About</Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link className={"js-scroll-trigger journey"} href="#experience" onClick={Scroller.handleAnchorScroll}>Journey</Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link className={"js-scroll-trigger skills"} href="#skills" onClick={Scroller.handleAnchorScroll}>Skills</Nav.Link>
                  </li>
                  
                  <li className="nav-item">
                    <Nav.Link className={"js-scroll-trigger projects"} href="#projects" onClick={Scroller.handleAnchorScroll}>Projects</Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link className={"js-scroll-trigger contact"} href="#contact" onClick={Scroller.handleAnchorScroll}>Contact</Nav.Link>
                  </li>
                  {/* <li className="nav-item">
                    <Nav.Link className={"js-scroll-trigger"} href="#blog" onClick={Scroller.handleAnchorScroll}>Blog</Nav.Link>
                  </li> */}
                </Scrollspy>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
        <header className="masthead">
          <div className="container h-100">
            <div className="row h-100 align-items-center justify-content-center text-center">
              <div className="col-lg-12 align-center">
                  {/* <img src={Avatar} class="rounded" alt="Naveen"/> */}
                {/* <img alt="Image goes here"/> */}
                <p className="text-white-75">Hi, I am </p>
                  <h1 className="text-uppercase text-white font-weight-bold"> Naveen Raja</h1>
                <hr className="divider my-4"/> 
                <p className="text-white-75 font-weight-light mb-5">Front end developer.</p>
                <p className="text-white-75 font-weight-light mb-5">Working as a part time security officer in Bidvest Noonan</p>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}
