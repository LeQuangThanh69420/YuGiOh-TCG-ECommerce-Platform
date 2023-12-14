import { useEffect, useState } from "react";

import Body from "./Body"

import './../../styles/ClientView.css'

function ClientView() {

    const [cards, setCards] = useState([]);

    return(
        <div className="main-content">
            <Body cards={cards} setCards={setCards}/>
        </div>
    ) 
}

export default ClientView