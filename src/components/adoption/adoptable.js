import React from 'react';
import './adoptable.css';


class Adoptable extends React.Component{

    state = {
      index: 0,
    }

    next = () => {
      this.setState({
        index: this.state.index + 1
      });
    }

    back = () => {
      this.setState({
        index: this.state.index - 1
      });
    }

    render(){

      const { index } = this.state;
      let pets = this.props.pets;
      let adopt = this.props.adopt;
      let user = this.props.user;
      
      if(pets.length > 0 && user === 'Arpan Patel'){

        return(
          <div>
            <img
              className='adoptable-pet-pic'
              src={pets[index].imageURL}
              alt={pets[index].imageDescription}
            />
            <p> Description: {pets[index].imageDescription}</p>  
            <p> Name: {pets[index].name}</p>  
            <p> Sex: {pets[index].sex}</p>       
            <p> Breed: {pets[index].breed}</p>       
            <p> Age: {pets[index].age}</p>       
            <p> Story: {pets[index].story}</p>

            {index !== 0 && <button onClick={this.back}>See Previous</button>}   
            {index === 0 && <button onClick={() => adopt()}>Adopt</button>}  
            {index < pets.length - 1 && <button onClick={this.next}>See Next</button>}

          </div>
        );
          
      }

      else if(pets.length !== 0){
        return(
          <div>
            <img
              className='adoptable-pet-pic'
              src={pets[index].imageURL}
              alt={pets[index].imageDescription}
            />
            <p> Description: {pets[index].imageDescription}</p>  
            <p> Name: {pets[index].name}</p>  
            <p> Sex: {pets[index].sex}</p>       
            <p> Breed: {pets[index].breed}</p>       
            <p> Age: {pets[index].age}</p>       
            <p> Story: {pets[index].story}</p>
  
            {index !== 0 && <button onClick={this.back}>See Previous</button>}   
            {index < pets.length - 1 && <button onClick={this.next}>See Next</button>}
  
          </div>
        );
            
      }

      else{
        return(
          <div>
            <h2>Sorry, all pets have been adopted, please come back later!</h2>
          </div>
        );
      }

      
    }
}

export default Adoptable;