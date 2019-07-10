import React from 'react';
import Card from '../card/Card.js';


const Characters = ({chars}) => {

   return (
      <div className='row mx-auto'>
         {
           chars.map((char, i) => {
             return (
               <Card
                 key={i}
                 id={chars[i].id}
                 name={chars[i].name}
                 species={chars[i].species}
                 />
             );
           })
         }
      </div>
   );
};

export default Characters;
