import React from 'react';
import Card from '../card/Card.js';


const Characters = ({chars}) => {

   return (
      <div className='row mx-auto tc ml4-ns'>
         {
           chars.map((char, i) => {
             return (
               <Card
                 key          =  {i}
                 name         =  {chars[i].name}
                 species      =  {chars[i].species}
                 gender       =  {chars[i].gender}
                 height       =  {chars[i].height}
                 mass         =  {chars[i].mass}
                 hair_color   =  {chars[i].hair_color}
                 skin_color   =  {chars[i].skin_color}
                 eye_color    =  {chars[i].eye_color}
                 homeworld    =  {chars[i].homeworld}

                 />
             );
           })
         }
      </div>
   );
};

export default Characters;
