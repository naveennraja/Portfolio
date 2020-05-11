import React, { Component } from 'react';
import ProjectList from "./ProjectsList";
// import Image from '../gatsby-components/image';
import Modal from "../UI/Modal";
import GithubLink from './GithubLinks';

class Project extends Component {
  constructor(props){
    super(props)
    //this.modalHandler = this.modalHandler.bind(this);
  }
    generateImage = (imgList,classes) => {
       return imgList.map(function(val){
         const altText = val.split(".")[0];
          return <img src={val} key={altText} alt= {altText} className={classes}/>
          {/* <Image key={altText} filename={val} altText={altText} className={classes}/> */}
        }); 
    }
     state = { 
       modalShow : false,
       current : "",
       gifClassName: "",
     }
     modalHandler= (gify,clsName,e) => {
        e.preventDefault()
        this.setModal(true, gify,clsName);
     }
     setModal = (isShown, currentGif,clsName) => {
      console.log(currentGif,clsName);
        this.setState({ modalShow: isShown, current: currentGif, gifClassName : clsName });
     }
     render() { 
      const  classesForList = "footer-image technology-list";
       const list = Object.keys(ProjectList).map((key)=> {
          const {technologies  , github , giphy } = ProjectList[key];
          return <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6 mb-4" key={key}>
                  <div className="card border-primary">
                          <img src={giphy} className="card-img-top object-fit-contain" alt={key}/>
                          <div className="card-body "> 
                            <h5 className="card-title text-secondary">
                               <a href= {github}  rel="noopener noreferrer">{key}</a>
                              </h5>
                          </div>
                        <div className="card-footer">
                            <div className="footer-left align-top float-left">
                              {this.generateImage(technologies,classesForList)}
                            </div>
                            <div className="footer-right align-bottom float-right">
                              <a className="float-left d-block ml-2 text-secondary" onClick={this.modalHandler.bind(this, giphy ,key)}>
                                  <i className={`fas fa-2x mb-3 fa-eye`}> </i>
                               </a> 
                              <GithubLink GithubLink = {github}  className="float-right"/>  
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>  
                </div>           
       })
        return (
          <section className="page-section" id="projects">
             <div className="container ">
                <h2 className="text-primary mt-0 text-center">Projects!</h2>
                <hr className="divider my-4"/>
                <Modal/>
                <div className="row ">
                  {list}                  
                </div>
              </div>
              <Modal show={this.state.modalShow} onHide={() => this.setModal(false, 0)}>
                  <img  src={this.state.current} className={this.state.gifClassName} alt={this.state.gifClassName}/>
                {/* <PortfolioCarousel images={this.props.data.images.edges} current={this.state.modalCurrent}/> */}
              </Modal>
          </section>
          
        );
     }
}
 
export default Project;