import Header from "./Header"
import Body from "./Body"
import { useEffect, useState } from "react";
import './../../styles/ClientView.css'
import { useNavigate } from "react-router-dom";

function ClientView() {
    const navigate = useNavigate();

    const [cards, setCards] = useState([]);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        setUserData(JSON.parse(localStorage.getItem('userData')));
    }, [])

    useEffect(() => {
        if(!localStorage.getItem('userData')) {
            navigate('/login')
        }
    }, [])

    return(
        <div className="main-content">
            <Header setCards={setCards} userData={userData}/>
            <Body cards={cards} setCards={setCards}/>
        </div>
    ) 
}

export default ClientView