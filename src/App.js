import React, { Component } from 'react';
import David from './Davids';
import AddNinja from './addNinja';
import './index.css';






class App extends Component {
  state = {
    ninjas : []
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
   


  }

  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    })
    this.setState({ninjas: ninjas})
  }

  
    render() {
      return (
        <div className = "wholeApp">
          <div className= "app">
            <div className="header">
              <h1 className = "text">Things To Do</h1>
              <p className = "text2">Lets Get Stuff Done Today :)</p>
            </div>
          
            <div className = "components">
              <AddNinja addNinja={this.addNinja} ninjas={this.state.ninjas}/>
              
            </div>

          </div>
          <div className = "components2">
            
            <span><David deleteNinja={this.deleteNinja} ninjas={this.state.ninjas}/></span>
            
          </div>
            
        
            

        </div>
        
        
      );
    }
  
}

export default App;
