import React from 'react';
import { Link } from 'react-router-dom';
import './landing-page.css';



class LandingPage extends React.Component{


  render(){
    return(
      <>
        <div className='image-container'>
          <img src='https://i2.wp.com/freepngimages.com/wp-content/uploads/2014/04/dog_and_cat_1_2.png?fit=472%2C261'
            alt='dog-cat-pic'
          />
        </div>
        <div className='landing-page-container'>
          <p>Welcome to APSPCA where our goal is make sure each animal
            can find their furever home. You can choose a dog or a cat, and the first available
            pet will be available for you to adopt. Pets are adoptable in a first come first serve manner.
          </p>
          <Link to='/adoption-page'>Adopt Now!</Link>
        </div>
      </>
    );
  }
}

export default LandingPage;