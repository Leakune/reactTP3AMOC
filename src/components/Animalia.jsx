import { useState, useEffect } from "react";

export default function Animalia(){
    //useState
    const [name, setName] = useState(null)
    const [animaux, setAnimaux] = useState(null)
    const [error, setError] = useState(null);
    useEffect(() => {
        if(name != null){
            let url = "https://api.unsplash.com/search/photos?page=1&query=" + name + "&client_id=S9Un2HirZgklj5Bc3yjo_ul6SEoQnL2P-hq96l46ddM";
            fetch(url)
                .then((response) => response.json())
                .then(
                    (result) => {
                        setAnimaux(result.results);
                    },
                    // Remarque : il faut gérer les erreurs ici plutôt que dans
                    // un bloc catch() afin que nous n’avalions pas les exceptions
                    // dues à de véritables bugs dans les composants.
                    (error) => {
                        setError(error);
                    }
                )
        }
    }, [animaux, name])
    if (error) {
        return <div>Erreur : {error.message}</div>;
    }
    else if(animaux != null){
        return(    
            <div>
                <div>
                    <h2>{name}</h2>
                    <img src={animaux[0].urls.small} alt={animaux.alt_description}></img>
                </div>
                <div>
                    <select defaultValue="default" class="form-select" aria-label="Default select example" onChange={() => setName(document.getElementsByTagName('select')[0].value)}>
                        <option value="default">Open this select menu</option>
                        <option value="Anteater">Anteater</option>
                        <option value="Bear">Bear</option>
                        <option value="Bird">Bird</option>
                        <option value="Bull">Bull</option>
                        <option value="Cat">Cat</option>
                        <option value="Cub">Cub</option>
                        <option value="Chicken">Chicken</option>
                        <option value="Cow">Cow</option>
                        <option value="Alligator">Alligator</option>
                        <option value="Deer">Deer</option>
                        <option value="Dog">Dog</option>
                        <option value="Duck">Duck</option>
                        <option value="Elephant">Elephant</option>
                        <option value="Frog">Frog</option>
                        <option value="Goat">Goat</option>
                        <option value="Gorilla">Gorilla</option>
                        <option value="Hamster">Hamster</option>
                        <option value="Hippo">Hippo</option>
                        <option value="Horse">Horse</option>
                        <option value="Koala">Koala</option>
                        <option value="Kangaroo">Kangaroo</option>
                        <option value="Lion">Lion</option>
                        <option value="Monkey">Monkey</option>
                        <option value="Mouse">Mouse</option>
                        <option value="Octopus">Octopus</option>
                        <option value="Ostrich">Ostrich</option>
                        <option value="Eagle">Eagle</option>
                        <option value="Penguin">Penguin</option>
                        <option value="Pig">Pig</option>
                        <option value="Rabbit">Rabbit</option>
                        <option value="Rhino">Rhino</option>
                        <option value="Sheep">Sheep</option>
                        <option value="Squirrel">Squirrel</option>
                        <option value="Tiger">Tiger</option>
                        <option value="Wolf">Wolf</option>
                    </select>
                </div>

                </div>
    
        );    
    }
    else{
        return(    
            <div>
                <div>
                    <select class="form-select" aria-label="Default select example" onChange={() => setName(document.getElementsByTagName('select')[0].value)}>
                        <option selected>Open this select menu</option>
                        <option value="Anteater">Anteater</option>
                        <option value="Bear">Bear</option>
                        <option value="Bird">Bird</option>
                        <option value="Bull">Bull</option>
                        <option value="Cat">Cat</option>
                        <option value="Cub">Cub</option>
                        <option value="Chicken">Chicken</option>
                        <option value="Cow">Cow</option>
                        <option value="Alligator">Alligator</option>
                        <option value="Deer">Deer</option>
                        <option value="Dog">Dog</option>
                        <option value="Duck">Duck</option>
                        <option value="Elephant">Elephant</option>
                        <option value="Frog">Frog</option>
                        <option value="Goat">Goat</option>
                        <option value="Gorilla">Gorilla</option>
                        <option value="Hamster">Hamster</option>
                        <option value="Hippo">Hippo</option>
                        <option value="Horse">Horse</option>
                        <option value="Koala">Koala</option>
                        <option value="Kangaroo">Kangaroo</option>
                        <option value="Lion">Lion</option>
                        <option value="Monkey">Monkey</option>
                        <option value="Mouse">Mouse</option>
                        <option value="Octopus">Octopus</option>
                        <option value="Ostrich">Ostrich</option>
                        <option value="Eagle">Eagle</option>
                        <option value="Penguin">Penguin</option>
                        <option value="Pig">Pig</option>
                        <option value="Rabbit">Rabbit</option>
                        <option value="Rhino">Rhino</option>
                        <option value="Sheep">Sheep</option>
                        <option value="Squirrel">Squirrel</option>
                        <option value="Tiger">Tiger</option>
                        <option value="Wolf">Wolf</option>
                    </select>
                </div>
            </div>
        );
    }
}