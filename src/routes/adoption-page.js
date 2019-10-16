import React from 'react';
import Users from '../components/adoption/users';
import catsApiService from '../services/cats-service';
import dogsApiService from '../services/dogs-service';
import usersApiService from '../services/users-service';
import Adoptable from '../components/adoption/adoptable';
import './adoption-page.css';


class AdoptionPage extends React.Component{

  state = {
    cats: [],
    dogs: [],
    users: [],
    user: {},
    error: {},
  }

  componentDidMount(){

    catsApiService.getCats()
      .then(res => {
        this.setState({
          cats: res
        });
      })
      .catch(res => this.setState({error: res.message}));

    dogsApiService.getDogs()
      .then(res => {
        this.setState({
          dogs: res
        });
      })
      .catch(res => {
        this.setState({error: res.message});
      }
      );

    usersApiService.getUsers()
      .then(res => {
        this.setState({
          users: res,
          user: res[0].name
        });
      });


    this.interval = setInterval(() => {
      this.updateUser();
    }, 5000);

  }

  updateUser() {
    usersApiService.updateUsers()
      .then(res => {
        this.setState({
          users: res,
          user: res[0].name
        });
      });
  }

  deleteDog = () => {
    dogsApiService.deleteDogs();

    let updatedDogs = [...this.state.dogs];

    updatedDogs.shift();

    this.updateUser();

    this.setState({
      dogs: updatedDogs
    });
  }

  deleteCat = () => {
    catsApiService.deleteCats();

    let updatedCats = [...this.state.cats];

    updatedCats.shift();

    this.updateUser();

    this.setState({
      cats: updatedCats
    });
  }

  render(){
    const { cats, dogs, users, user, error } = this.state;

    if(cats !== null){
      return(
        <>
          <section className='userSection'>
            <Users users={users}/>
          </section>
          
          <div className='adoptable-container'>
            <section className='information-container'>
              <h2>Dogs</h2>
              <Adoptable pets={dogs} adopt={this.deleteDog} user={user} error={error}/>
            </section>

            <section className='information-container'>
              <h2>Cats</h2>
              <Adoptable pets={cats} adopt={this.deleteCat} user={user} error={error}/>
            </section>
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