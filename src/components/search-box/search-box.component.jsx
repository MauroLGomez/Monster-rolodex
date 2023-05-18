import { Component } from "react";

class SeachBox extends Component {
  
  render() {
    
    return (

      <input className='search-box'
          type='search'
          placeholder='Search monsters'
          onChange= { onSearchChange }
      />
    )
  }
}

export default SeachBox;