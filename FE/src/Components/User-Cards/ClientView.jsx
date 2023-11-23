import { useEffect, useState } from "react";

import AdSlider from "../AdSlider/Adslider";
import Body from "./Body"
import Header from "../Shared/Header";

import './../../styles/ClientView.css'

function ClientView() {

    const [cards, setCards] = useState([]);
    
    return(
        <div className="main-content">
            <Header />
            <AdSlider />
            <Body cards={cards} setCards={setCards}/>
        </div>
    ) 
}

export default ClientView