import React from 'react';

const GithubLink = (props) => {
     return (<a 
               className="d-block text-secondary" 
               href={props.GithubLink}
               target="_blank"
               rel="noopener noreferrer"
               title="Check Github">
               <i className="fab fa-2x fa-github"></i>
          </a>);
}
 
export default GithubLink;