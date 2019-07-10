import React from 'react';
import './card.css';

const Card = ({name, species}) => {
   return(
      <div className="card text-white bg-dark mb-3">
        <div className="card-header"><h5>{name}</h5></div>
        <div className="card-body">
            <h6 className="card-title">
               {species}
            </h6>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
   );
};

export default Card;
