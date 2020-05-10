import React, { Component } from 'react';
import ProjectList from "./ProjectsList";
import Image from '../gatsby-components/image';
import GithubLink from './GithubLink';

class Project extends Component {
    generateImage = (imgList,classes) => {
       return imgList.map(function(val){
         const altText = val.split(".")[0];
          return <Image key={altText} filename={val} altText={altText} className={classes}/>
        }); 
    }
     state = {  }
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
                        <div className="card-footer text-muted">
                            <div className="footer-left align-top float-left">
                              {this.generateImage(technologies,classesForList)}
                            </div>
                            <div className="footer-right align-bottom float-right">
                              <GithubLink GithubLink = {github} />  
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
                <div className="row ">
                  {list}                  
                </div>
              </div>
          </section>
        );
     }
}
 
export default Project;
export const imageData = graphql`
  query {
    images: allFile(filter: {relativePath: {glob: "portfolio/fullsize/*.jpg"}}, sort: {fields: name}) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`