import React from 'react';
import Users from '../components/adoption/users';
import catsApiService from '../services/cats-service';
import dogsApiService from '../services/dogs-service';
import usersApiService from '../services/users-service';
import Adoptable from '../components/adoption/adoptable'


class AdoptionPage extends React.Component{

  state = {
    cats: [],
    dogs: [],
    users: [],
  }

  componentDidMount(){

    catsApiService.getCats()
      .then(res => {
        this.setState({
          cats: res
        });
      });

    dogsApiService.getDogs()
      .then(res => {
        this.setState({
          dogs: res
        });
      });

    usersApiService.getUsers()
      .then(res => {
        this.setState({
          users: res
        });
      });


    this.interval = setInterval(() => {
      this.updateUser();
    }, 10000);

  }

  updateUser() {
    usersApiService.updateUsers()
      .then(res => {
        this.setState({
          users: res
        });
      });
  }

  render(){
    const { cats, dogs, users } = this.state;

    if(cats !== null){
      return(
        <>
          <div>
            <section>
              <h2>Dogs</h2>
              <Adoptable pets={dogs}/>
            </section>

            <section>
              <h2>Cats</h2>
              <Adoptable pets={cats}/>
            </section>
          </div>
  
          <div>
            <Users users={users}/>
          </div>
        </>
      );
    }

    else{
      return (
        <div></div>
      );
    }
    
  }
}

export default AdoptionPage;