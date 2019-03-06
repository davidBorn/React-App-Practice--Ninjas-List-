import React from 'react';
import './index.css';


const Ninjas = ({ninjas, deleteNinja}) => {
    
   
         
    
    // const ninjaList = ninjas.map(ninja => {
    //     if (ninja.age > 20){
    //     return (
    //         <div className="David" key={ninja.id}>
    //             <div>Name: {ninja.name}</div>
    //             <div>Age: {ninja.age}</div>
    //             <div>Belt: {ninja.belt}</div>
    //         </div>
    //     ) 
    //     }
    //     else{
    //         return null;
    //     } 
    // })
    const ninjaList = ninjas.map(ninja => {
        return  (   
                <div className="David" key={ninja.id}>
                    <div className = "task">Objective: {ninja.name}</div>
                    <div className = "countdown">Countdown: {ninja.time}</div>
                    
                    {/* onClick is surrounded by anonymous function so it does not fire every time. */}
                    <div className = "deleteButton">
                        <button onClick={() => {deleteNinja(ninja.id)}}><span>Finished</span></button>
                    </div>
                </div>)
                
    })
    return(
        <div className = "ninja-list">
            {ninjaList}
        </div>
    );
    
}

export default Ninjas;