import React,{Component} from 'react';
import resume from "../documents/Naveen_N_Raja.pdf"
class Contacts extends Component {
     state = { 
          data: {
               "Phone":{
                     "text": "+353 894320959",
                     "link": "callto:+353 894320959",
                     "classes": "fas fa-phone"
               },
               "LinkedIn":{
                    "text": "LinkedIn",
                    "link": "https://www.linkedin.com/in/naveennraja/",
                    "classes": "fab fa-linkedin-in"
               },
               "Email":{
                    "text": "naveennraja@gmail.com",
                     "link": "mailto:naveennraja@gmail.com",
                     "classes": "fas fa-envelope"
               },
               "Resume": {
                    "text": "Resume",
                    "link": `${resume}`,
                    "classes": "fas fa-file-pdf text-left"
               }
          }
      }
     render() { 
          const {data} = this.state;
          const listDetail =  Object.keys(data).map(key=>{
               return  <div className="col-lg-6  mb-5 " key={key}>
                              <i className={`${data[key].classes} fa-3x mb-3 text-primary`}></i>
                                   <a className="d-block text-secondary" href={data[key].link}>{data[key].text}</a>
                            </div>
          });
          return ( <section className="page-section" id="contact">
                         <div className="container">
                              <div className="row justify-content-center">
                                   <div className="col-lg-8 text-center">
                                        <h2 className="mt-0 text-primary">Let's Get In Touch!</h2>
                                        <hr className="divider my-4"/>
                                        <p className="text-muted mb-5">I'm looking out for roles on front-end developer!</p>
                                   </div>
                              </div>
                              <div className="row text-center ml-auto">
                                   {listDetail}
                              </div>
                         </div>
                    </section>);
     }
}
 
export default Contacts;