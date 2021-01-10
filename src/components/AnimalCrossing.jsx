import { useState, useEffect } from "react";

export default function Animaux(props){
    const [animauxCross, setAnimauxCros] = useState([])
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch("https://acnhapi.com/v1a/villagers/")
            .then((response) => response.json())
            .then(
                (result) => {
                    setAnimauxCros(result);
                },
                // Remarque : il faut gérer les erreurs ici plutôt que dans
                // un bloc catch() afin que nous n’avalions pas les exceptions
                // dues à de véritables bugs dans les composants.
                (error) => {
                    setError(error);
                }
            )
    }, [])
    if (error) {
        return <div>Erreur : {error.message}</div>;
      }
    else if(animauxCross != null){
        return(
            <ul>
                {animauxCross.map( animal => 
                <div key={animal.id} class="border-bottom">
                    <div>
                        <label>Name: {animal.name['name-EUen']}</label>
                    </div> 
                    <div>
                        <label>Species: {animal.species}</label>
                    </div>
                    <div>
                        <label>file-name: {animal['file-name']}</label>
                    </div>     
                    <img src={animal.image_uri} alt={animal.species}></img>
                </div>)
                }
            </ul>
        )
    }
    
}