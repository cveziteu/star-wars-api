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
      let peopleUrls = [];
      for (let i = 1; i < 3; i++) {
         peopleUrls.push(`https://swapi.co/api/people/?page=${i}`);
      }
      let allCharacters = [];
      Promise.all(peopleUrls.map(url=> {
         return (
            fetch(url)
            .then(response => response.json())
            .then(characters => {
               allCharacters = allCharacters.concat(characters.results);
            })
            .then(() => {
               this.setState({ characters: allCharacters})
               console.log(allCharacters, url)
            })
         )
      }))
   }

   render() {
      const {characters} = this.state;
      return (
         <div>
            <header className="bg-white-90 fixed w-100 ph1 pv1 pv4-ns ph4-m ph5-l">
               <nav className="f6 fw6 tracked">
                  <a className="link black dib mr6 v-mid f4" href="#" title="Home">
                     <img src={logo} height='35px' className='dib v-mid hover-purple' alt='' /> universe
                  </a>
                  <a className="link black dib mr3 hover-red v-mid selected" href="#" title="Characters">Characters</a>
                  <a className="link black dib mr3 hover-red v-mid" href="#" title="Species">Species</a>
                  <a className="link black dib mr3 hover-red v-mid" href="#" title="Planets">Planets</a>
                  <a className="link black dib hover-red v-mid" href="#" title="Movies">Movies</a>
               </nav>
            </header>
            <main className='pt5 w-100'>
               <Characters chars = {characters} />
            </main>
         </div>
      );
   }
}

export default App;
