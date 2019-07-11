import React from 'react';


class Species extends React.Component {

   constructor() {
      super();
      this.state = {
         speciesArray : '',
         species: ''
      }
   }

   componentDidMount() {
      fetch({species})
      .then(response => response.json())
      .then(result => {
         this.setState({
            speciesArray = result
         })
      });
   }

   render() {
      return (
         {this.state.speciesArray.name}
      )
   }
};


export default Species;
