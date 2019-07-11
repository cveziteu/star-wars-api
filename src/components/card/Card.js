import React from 'react';
import './card.css';

const Card = ({name, species, gender, height, mass, hair_color, skin_color, eye_color, homeworld}) => {

   return(
      <div className="mw5 center bg-white br3 pa4-ns mv5 ba b--black-10 dib m7">
         <div className="tc">
            <img src="https://66.media.tumblr.com/avatar_c6a8eae4303e_512.pnj" className="br-100 h3 w3 dib" alt='' title="Photo of a kitty staring at you" />
            <h1 className="f4 dark-green">{name}</h1>
            <hr className="mw3 bb bw1 b--black-10" />
         </div>
         <h6 className='tc'>{species}</h6>
         <table className='tl dt--fixed-l'>
            <thead>
               <tr>
                  <td></td>
                  <td className='f7 tc mw3'></td>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td className='f6'>Homeworld:</td>
                  <td className='f7 tc mw5 b'>homeworld</td>
               </tr>
               <tr>
                  <td className='f6'>Gender:</td>
                  <td className='f7 tc b'>{gender}</td>
               </tr>
               <tr>
                  <td className='f6'>Height:</td>
                  <td className='f7 tc b'>{height}</td>
               </tr>
               <tr>
                  <td className='f6'>Mass:</td>
                  <td className='f7 tc b'>{mass}</td>
               </tr>
               <tr>
                  <td className='f6'>Hair color:</td>
                  <td className='f7 tc b'>{hair_color}</td>
               </tr>
            </tbody>
         </table>
      </div>
   );
};

export default Card;
