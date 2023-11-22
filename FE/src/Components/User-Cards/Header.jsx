/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./../../styles/Header.css";
import SearchSelection from "../SearchSelection/SearchSelection";
import { Link } from "react-router-dom";
import LogoDuRiu from "../Shared/LogoDuRiu";
import { searchCard, getSomeThingOfCard } from "../../api/apiCard";

function Header({ setCards, userData }) {
    const [inputNameValue, setInputNameValue] = useState("");
    const [types, setTypes] = useState([]);
    const [origins, setOrigins] = useState([]);
    const [elements, setElements] = useState([]);
    const [rarities, setRarities] = useState([]);

    const [searchObject, setSearchObject] = useState({
        name: "",
        type: "",
        origin: "",
        element: "",
        rarity: "",
    });

    useEffect(() => {
        searchCard(searchObject.name, searchObject.type, searchObject.origin, searchObject.element, searchObject.rarity)
            .then(data => {
                console.log(data);
                setCards(data);
            })
    }, [searchObject]);

    //get types
    useEffect(() => {
        getSomeThingOfCard('GET_TYPE').then(data => {
            console.log(data);
            setTypes(data);
        })
    }, []);
    //get origins
    useEffect(() => {
        getSomeThingOfCard('GET_ORIGIN').then(data => {
            console.log(data);
            setOrigins(data);
        })
    }, []);
    // //get elements
    useEffect(() => {
        getSomeThingOfCard('GET_ELEMENT').then(data => {
            setElements(data);
        })
    }, []);
    // //get rarities
    useEffect(() => {
        getSomeThingOfCard('GET_RARITY').then(data => {
            setRarities(data)
        })
    }, []);

    const handleAddName = () => {
        setSearchObject({
            ...searchObject,
            name: inputNameValue,
        });
    };
    const updateSearchObject = (propSet, value) => {
        setSearchObject({
            ...searchObject,
            [propSet]: value,
        });
    };

    return (
        <div className="main-container">
            <div className="header-bar">
                <LogoDuRiu logoColor={'#000'} logoNameColor={'#7400CC'}/>
                {/* <div className="search-bar">
                    <span>Search</span>
                    <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Enter card name"
                        value={inputNameValue}
                        onChange={(event) => setInputNameValue(event.target.value)}
                    />
                    <button onClick={handleAddName}>Search</button>
                </div> */}
                <div className="users-button">
                    {!userData && <Link to={"/login"} >Login</Link>}
                    {userData &&
                        <img src={userData.avatarURL} alt="" className="header-user-avt" />
                    }
                </div>
            </div>
            {/* <div className="search-opt-container">
                <div className="search-opt">
                    <SearchSelection
                        type="Type"
                        selections={types}
                        propSet="type"
                        onSelect={updateSearchObject}
                    />
                    <SearchSelection
                        type="Origin"
                        selections={origins}
                        propSet="origin"
                        onSelect={updateSearchObject}
                    />
                    <SearchSelection
                        type="Element"
                        selections={elements}
                        propSet="element"
                        onSelect={updateSearchObject}
                    />
                    <SearchSelection
                        type="Rarity"
                        selections={rarities}
                        propSet="rarity"
                        onSelect={updateSearchObject}
                    />
                </div>
            </div> */}
        </div>
    );
}

export default Header;
