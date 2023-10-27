import Header from "./Header"
import Body from "./Body"
import { useEffect, useState } from "react";
import './ClientView.css'

function ClientView() {

    const [cards, setCards] = useState([]);

    return(
        <div className="main-content">
            <Header setCards={setCards}/>
            <Body cards={cards} setCards={setCards}/>
        </div>
    ) 
}

export default ClientView