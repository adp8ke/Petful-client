import React from 'react';
import AdoptedApiService from '../../services/adopted-service';
import './adopted.css';


class Adopted extends React.Component{

    state = {
      adopted: []
    }
    
    componentDidMount(){
    
      AdoptedApiService.getAdopted()
        .then(res => {
          this.setState({adopted: res});
        });
    
    }

    render(){

      const { adopted } = this.state;

      let adoptedList = adopted.map((pet, i) => {
        return(
          <div key={i} className='adopted-pet'>
            <img className='adopted-pet-pic' src={pet.imageURL} alt={pet.imageDescription}/>
            <h3> Name: {pet.name}</h3>
            <p> Description: {pet.imageDescription}</p>
            <p> Age: {pet.age}</p>
            <p> Breed: {pet.breed}</p>
            <p> Story: {pet.story}</p>
          </div>
        );
      });

      return(
        <div>     
          {adoptedList} 
        </div>
      );
    }
}

export default Adopted;