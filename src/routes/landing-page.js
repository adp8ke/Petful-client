import React from 'react';
import { Link } from 'react-router-dom'



class LandingPage extends React.Component{


  render(){
    return(
      <div>
        <p>Welcome to APSPCA where our goal is make sure each animal
            can find their furever home. You can choose a dog or a cat, and the first available
            pet will be available for you to adopt. If you cannot find a specific pet, you will have to start
            the process over and go to the end of the queue. 
        </p>
        <Link to='/adoption-page'>Adopt Now!</Link>
      </div>
    );
  }
}

export default LandingPage;