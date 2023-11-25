import { useEffect, useState } from "react";

import Body from "./Body"
import AdSlider from "../AdSlider/Adslider";

import './../../styles/ClientView.css'

function ClientView() {

    const [cards, setCards] = useState([]);
    
    return(
        <div className="main-content">
            <AdSlider />
            <Body cards={cards} setCards={setCards}/>
        </div>
    ) 
}

export default ClientView