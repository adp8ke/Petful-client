import React from 'react';
import Adopted from '../components/adopted/adopted';


class AdoptedPage extends React.Component{


  render(){
    return(
      <div>
        <div>
          <h2>Pets Who Have Found Their Furever Homes</h2>
        </div>

        <div>
          <Adopted />
        </div>
      </div>
    );
  }
}

export default AdoptedPage;