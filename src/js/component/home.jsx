import React from "react";
import { useState } from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

    const [change, setChange] = useState("");

    const colores = [{
        id : "red",
        classStyle : "bg-danger"
    },
    {
        id : "yellow",
        classStyle : "bg-warning"
    },
    {
        id : "green",
        classStyle : "bg-success"
    }
]

const alternar = () => {
    console.log("Hellou!")
    const nodoLight = document.querySelector("#trafficLight")
    setInterval(transition(nodoLight.childNodes), 3000)
}

const transition = (arrayDom) => {
    for(let i = 0; i < arrayDom.length; i++){
        let time = i * 1000
        setTimeout(() => { 
            for (let j = 0; j < arrayDom.length; j++) {
                arrayDom[j].classList.remove("iluminado")
            }
         arrayDom[i].classList.add("iluminado")
        }, time)   
    }
}

    
    return (
        <div className="container m-5">
            <div className="traffic mx-auto text-center bg-dark"></div>
            <div className="main-box mx-auto text-center bg-dark rounded-5 p-1">
            {
                colores.map( ( {id,classStyle} ) => (
                    <div 
                        key={id} 
                        className={`color ${classStyle} mt-2 ${(change === id ? "iluminado" : "")}`}  
                        onClick={() => setChange(id)}>                        
                    </div>
                ))
            }
            </div>
            <br />
            <div className="d-flex justify-content-center">
                <button className="btn btn-primary"onClick={alternar}>Alternar</button>
            </div>
        </div>
    );
}

export default Home;