import Header from "./Header"
import Body from "./Body"
import AdSlider from "../AdSlider/Adslider";
import { useEffect, useState } from "react";
import './../../styles/ClientView.css'

function ClientView() {

    const [cards, setCards] = useState([]);

    return(
        <div className="main-content">
            <Header setCards={setCards}/>
            <AdSlider />
            <Body cards={cards} setCards={setCards}/>
        </div>
    ) 
}

export default ClientView