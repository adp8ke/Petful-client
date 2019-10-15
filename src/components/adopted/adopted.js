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
            <h3>{pet.name}</h3>
            <p>{pet.age}</p>
            <p>{pet.breed}</p>
            <p>{pet.story}</p>
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