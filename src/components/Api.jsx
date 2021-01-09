//import { useState, useEffect } from "react";
import AnimalCrossing from './AnimalCrossing';
import Animalia from './Animalia';
import React, { useState, useEffect } from 'react';

export default function Api(){
    const [count, setCount] = useState(0);
    //useState
    //let [link, setLink] = useState("")
    // useEffect(() => {
        
    // })
    useEffect(() => {
        // Mettre à jour le titre du document en utilisant l'API du navigateur
        document.title = `Vous avez cliqué ${count} fois`;
      });

    return(

        <div>
            <h1>Api</h1>
            <AnimalCrossing/>
            <Animalia name="Animalia"/>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Click</button>
        </div>
    );
}