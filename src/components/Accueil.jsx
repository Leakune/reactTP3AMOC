import { useState } from "react";
import Button from "./Button";
export default function Accueil(){
    //useState
    //let [link, setLink] = useState("")
    // useEffect(() => {
        
    // })

    return(

        <div class="container">   
            <div>              
                <div class="row">
                    <img src="../AnimalCrossing.jpg" alt="animal crossing couverture" />
                    <h1>Welcome!</h1>
                    <p>The goal of this website is to use 2 APIs with React</p>
                </div>            
                <div class="row">
                    <div class="col-sm border" id="animalCrossingAPI">
                        <h2>AnimalCrossing</h2>
                        <p>From the website http://acnhapi.com/, i'll fetch some villagers data and display for each their information</p>
                        <Button href="/AnimalCrossing" className="btn btn-light mx-auto">ACNH API</Button>
                    </div>
                    <div class="col-sm border" id="animaliaAPI">
                        <h2>Animalia</h2>
                        <p>From the website https://www.gbif.org/species/1, i'll fetch some animal from across the world and display for each their information</p>
                        <Button href="/Animalia" className="btn btn-light mx-auto">ANIMALIA</Button>
                    </div>
                </div>
                <div class="row">
                    <h2>Fusion of the 2 APIs</h2>
                    <p>In this part i'll put in relation AnimalCrossing API with Animalia API</p>
                    <Button href="/Api" className="btn btn-light mx-auto">MAIN CONTENT</Button>
                </div>
            </div>
        </div>

    );
}