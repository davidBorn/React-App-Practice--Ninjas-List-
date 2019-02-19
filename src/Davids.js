import React from 'react';


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
        return ninja.age > 20 ? (   
                <div className="David" key={ninja.id}>
                    <div>Name: {ninja.name}</div>
                    <div>Age: {ninja.age}</div>
                    <div>Belt: {ninja.belt}</div>
                    {/* onClick is surrounded by anonymous function so it does not fire every time. */}
                    <button onClick={() => {deleteNinja(ninja.id)}}>Delete Ninja</button>
                </div>) 
                : null;
    })
    return(
        <div className = "ninja-list">
            {ninjaList}
        </div>
    );
    
}

export default Ninjas;