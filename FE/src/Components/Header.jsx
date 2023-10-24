import { useEffect, useState } from 'react'
import './Header.css'
import SearchSelection from './SearchSelection/SearchSelection';

function Header({ setCards }) {

    const [inputNameValue, setInputNameValue] = useState('');
    const [types, setTypes] = useState([]);
    const [origins, setOrigins] = useState([]);
    const [elements, setElements] = useState([]);
    const [rarities, setRarities] = useState([]);

    const [searchObject, setSearchObject] = useState({
        name: '',
        type: '',
        origin: '',
        element: '',
        rarity: ''
    });

    useEffect(() => {
        fetch(`http://localhost:5233/api/Card/searchCard?CardName=${searchObject.name}&CardTypeName=${searchObject.type}&CardOriginName=${searchObject.origin}&CardElementName=${searchObject.element}&CardRarityName=${searchObject.rarity}`)
            .then(res => res.json())
            .then(data => { setCards(data) })
    }, [searchObject])

    useEffect(() => {
        console.log(searchObject);
    }, [searchObject])

    //get types
    useEffect(() => {
        fetch('http://localhost:5233/api/Card/getCardType')
            .then(res => res.json())
            .then(data => { setTypes(data) });
    }, [])
    //get origins
    useEffect(() => {
        fetch('http://localhost:5233/api/Card/getCardOrigin')
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                setOrigins(data)
            });
    }, [])
    //get elements
    useEffect(() => {
        fetch('http://localhost:5233/api/Card/getCardElement')
            .then(res => res.json())
            .then(data => { setElements(data) });
    }, [])
    //get rarities
    useEffect(() => {
        fetch('http://localhost:5233/api/Card/getCardRarity')
            .then(res => res.json())
            .then(data => { setRarities(data) });
    }, [])

    const handleAddName = () => {
        setSearchObject({
            ...searchObject,
            name: inputNameValue,
        })
    }
    const updateSearchObject = (propSet, value) => {
        setSearchObject({
            ...searchObject,
            [propSet]: value,
        })
    }

    return (
        <div className='main-container'>
            <div className="header-bar">
                <div className='logo'>
                    DuRiu
                </div>
                <div className='search-bar'>
                    <span>Search</span>
                    <input type="text" name="" id="" placeholder='Enter card name' value={inputNameValue} onChange={event => setInputNameValue(event.target.value)} />
                    <button onClick={handleAddName}>Search</button>
                </div>
                <div className='users-button'>
                    <button>Login</button>
                </div>
            </div>
            <div className='search-opt-container'>
                <div className='search-opt'>
                    <SearchSelection type="Type" selections={types} propSet="type" onSelect={updateSearchObject} />
                    <SearchSelection type="Origin" selections={origins} propSet="origin" onSelect={updateSearchObject} />
                    <SearchSelection type="Element" selections={elements} propSet="element" onSelect={updateSearchObject} />
                    <SearchSelection type="Rarity" selections={rarities} propSet="rarity" onSelect={updateSearchObject} />
                </div>
            </div>
        </div>

    )
}

export default Header