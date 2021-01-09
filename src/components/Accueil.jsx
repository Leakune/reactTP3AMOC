import { useState } from "react";

export default function Accueil(){
    //useState
    let [link, setLink] = useState("")
    // useEffect(() => {
        
    // })

    return(

        <div>
            <img src="../AnimalCrossing.jpg" alt="animal crossing couverture" />
            <div>
                <h1>Welcome!</h1>
                <p>Choose:</p>
                <ul>
                    <li onClick={() => setLink("Villagers")}>Villagers</li>
                    <li onClick={() => setLink("Fishs")}>Fishs</li>
                    <li onClick={() => setLink("Bugs")}>Bugs</li>
                </ul>
            </div>
        </div>

    );
}