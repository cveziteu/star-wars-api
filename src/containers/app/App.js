import React, {Component} from 'react';
import logo from './starwars.svg';
import './App.css';

import Characters from '../../components/characters/Characters';

class App extends Component {

   constructor() {
      super();
      this.state = {
         characters: []
      }
   }

   componentDidMount() {
      fetch('https://swapi.co/api/people/')
      .then(response => response.json())
      .then(people => {
         this.setState({characters: people.results})
      });
   }

   render() {
      const {characters} = this.state;
      return (
         <div className="App">
           <header>
           <nav className="navbar sticky-top navbar-light bg-light">
              <a className="navbar-brand" href="#">
                 <img src={logo} height='50' className='d-inline-block' alt='' /> <h1 className='d-inline-block align-middle'> wikipedia</h1>
              </a>
           </nav>
           </header>
           <main>
              <Characters chars = {characters} />
           </main>
         </div>
      );
   }
}

export default App;
