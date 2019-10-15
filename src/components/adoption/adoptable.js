import React from 'react';


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

      if(pets.length > 0){

        return(
          <div>
            <img
              className='pet-picture'
              src={pets[index].imageURL}
              alt={pets[index].imageDescription}
            />
            <p> Name: {pets[index].name}</p>  
            <p> Sex: {pets[index].sex}</p>       
            <p> Breed: {pets[index].breed}</p>       
            <p> Age: {pets[index].age}</p>       
            <p> Story: {pets[index].story}</p>       
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