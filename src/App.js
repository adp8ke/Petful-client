import React from 'react';
import './App.css';
import LandingPage from './routes/landing-page';
import AdoptionPage from './routes/adoption-page';
import AdoptedPage from './routes/adopted-page';
import { Route, NavLink } from 'react-router-dom';

class App extends React.Component {

  render(){
    return (
      <main>

        <nav>
          <NavLink to='/adoption-page'>asdf</NavLink>
          <NavLink to='/adopted-page'>ghjkl</NavLink>
        </nav>

        <div className="App">
          <Route exact path='/' component={LandingPage} />
          <Route path='/adoption-page' component={AdoptionPage} />
          <Route path='/adopted-page' component={AdoptedPage} />
        </div>

      </main>
     
    );
  }

}

export default App;
