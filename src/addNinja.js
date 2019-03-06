import React, {Component} from 'react'
import './index.css';
import './clickjs.js';







  


class AddNinja extends Component {
    state ={
        name: null,
        time: null,
        
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.state.name == null ? alert("Please put down something to do") : 
        this.state.time == null ? alert("please give a time to complete task"):
        this.props.addNinja(this.state);
        e.target.reset();
     
     
        
        
    }
    render(){
        return ( 
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <ul>
                        <li><label className = "labels" htmlFor="name1">What do you want to get done?:</label>
                        <input className = "input1" type="text" id="name" onChange={this.handleChange} /><span className = "underline"></span></li>
                        
                        <li><label className = "labels" htmlFor="name2">Approx. time to completion (in days):</label>
                        <input className = "input2" type="text" id="time" onChange={this.handleChange} /><span className = "underline"></span></li>
                        
                        <li><button className = "btn"><span>Submit</span></button></li>
                    </ul>
                </form>
            </div>
        )
    }
}


export default AddNinja;