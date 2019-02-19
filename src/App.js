import React, { Component } from 'react';
import David from './Davids';
import AddNinja from './addNinja';



class App extends Component {
  state = {
    ninjas : [
      {name: 'Ryu', age: 30, belt: 'black', id: 1},
      {name: 'Yoshi', age: 20, belt: 'pink', id: 2},
      {name: 'Crystal', age: 25, belt: 'pink', id: 3}
      
    ]
  }
  /*don't setState outside of state because it is bad practice*/
  addNinja = (ninja) => {
    let ninjaCopy = [...this.state.ninjas];
    ninja.id = ninjaCopy.length + 1;
    /*adding an element to a copy*/
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    })
    console.log(ninjas)


  }

  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    })
    this.setState({ninjas: ninjas})
  }
  render() {
    return (
      <div className="App">
        <h1>My First React App</h1>
        <p>Welcome :)</p>
        <David deleteNinja={this.deleteNinja} ninjas={this.state.ninjas}/>
        <AddNinja addNinja={this.addNinja}/>

      </div>
    );
  }
}

export default App;
