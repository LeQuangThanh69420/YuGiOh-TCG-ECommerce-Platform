import Header from "./Header"
import Body from "./Body"
import { useState } from "react";

function ClientView() {

    const [cards, setCards] = useState([]);

    //console.log(cards);

    return(
        <div className="main-content">
            <Header setCards={setCards}/>
            <Body cards={cards} setCards={setCards}/>
        </div>
    ) 
}

export default ClientView