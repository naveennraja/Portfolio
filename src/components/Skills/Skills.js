import React, { Component, Fragment } from 'react';
import commonImage from "./SkillList";
import Image from '../gatsby-components/image';
class Skills extends Component {
     state = {  }
     listSkills = (val) => {
          const skills = Object.keys(commonImage[val]).map((key,idx)=>{
               return <div className="col-lg-3 col-md-3 col-sm-4 col-xs-4 text-center skill-img-container" key={key+idx} >
                              <Image altText={key} className="img-responsive  img-fluid" filename={commonImage[val][key]}/>
                              <h4 className="text-secondary">{key}</h4>
                         </div> 
          }) 
          return skills;
     }
     ObjmapKeys = (Obj) => {
          const headers = Object.keys(Obj).map((key, index) => {
               return    <Fragment key={key+index}>
                              <div className="row p-2">
                                   <div className="w-100 mb-3">
                                        <h3 className="text-left text-capitalize ">{key}</h3>
                                   </div>
                                   {this.listSkills(key)}
                              </div>
                         </Fragment>
          });
          return headers;
     }
     
     render() { 
          return ( <section className="page-section " id="skills">
                    <div className="container">
                         <h2 className="text-center mt-0 text-primary">Skills</h2>
                         <hr className="divider my-4"/>
                             {this.ObjmapKeys(commonImage)}
                    </div>
          </section>);
     }
 }
 
 export default  Skills;