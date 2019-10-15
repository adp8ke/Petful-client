import React from 'react';
import Adopted from '../components/adopted/adopted';


class AdoptedPage extends React.Component{


  render(){
    return(
      <div>
        <div>
          <p>Adopted Page</p>
        </div>

        <div>
          <Adopted />
        </div>
      </div>
    );
  }
}

export default AdoptedPage;