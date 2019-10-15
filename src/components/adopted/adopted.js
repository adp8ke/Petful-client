import React from 'react';
import AdoptedApiService from '../../services/adopted-service';


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

      let adoptedList = adopted.map(pet => {
        return(
          <li key={pet.id}>
            <img src={pet.imageURL}/>
            <p>{pet.imageDescription}</p>
            <p>{pet.name}</p>
            <p>{pet.age}</p>
            <p>{pet.breed}</p>
            <p>{pet.story}</p>
          </li>
        );
      });

      return(
        <div>
          <ul>
            {adoptedList}
          </ul>  
        </div>
      );
    }
}

export default Adopted;