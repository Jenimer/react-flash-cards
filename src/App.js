import React, { Component } from 'react';

class App extends Component {
  
  state = {
   cards:[
     {id: 1, front: 'sandwich', back: 'grilled cheese' },
     {id: 2, front: 'fry sauce', back: 'mayo, ketchup, pickle juice, mustard' },
     {id: 3, front: 'babies', back: 'diapers and drool' }      
    ]
  } 
  
  flip = () => {
    /*define what happens when clicked*/
  }
  
  render() {
    const {cards} = this.state;
    
    return (
      
      
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React flash cards</h1>
        </header>
        <div>
          <ul>
            { 
              cards.map(card => <li key={card.id}>{card.front}</li>)
            }
          </ul>
        </div>

         {/*button needs to be bound and have a click handler ...somewhere*/}
        <button onClick = {this.flip}>Flip card </button>
     
      </div>
    );
  }
}

export default App;
