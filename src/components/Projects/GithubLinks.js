import React,{Fragment} from 'react';

const GithubLink = (props) => {
     return (
          <Fragment>
          <a 
               className={`d-block ml-2 text-secondary ${props.className}`}
               href={props.GithubLink}
               target="_blank"
               rel="noopener noreferrer"
               title="Check Github">
               <i className="fab fa-2x fa-github"></i>
          </a>
          </Fragment>
          );
}
 
export default GithubLink;