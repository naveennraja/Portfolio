import React, { Component } from 'react';
import Chart from "./Chart";
class Journey extends Component {
     state = { }
     render() { 
          return ( <section className="page-section" id="experience">
                         <div className="container">
                              <h2 className="text-center text-primary mt-0">Journey</h2>
                              <hr className="divider my-4"/>
                              <div className="row">
                                    <Chart/>    
                              </div>
                         </div>
        </section> );
     }
}
 
export default Journey;