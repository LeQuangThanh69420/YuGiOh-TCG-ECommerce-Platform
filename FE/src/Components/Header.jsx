import { useState } from 'react'
import './Header.css'

function Header({ setCards }) {

    const [inputNameValue, setInputNameValue] = useState('');

    const handleSearchByName = () => {
        console.log(inputNameValue);
        fetch(`http://localhost:5233/api/Card/searchCard?CardName=${inputNameValue}`)
            .then(res => res.json())
            .then(data => {
                setCards(data)
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
                    <input type="text" name="" id="" placeholder='Enter card name' value={inputNameValue} onChange={event => setInputNameValue(event.target.value)}/>
                    <button onClick={handleSearchByName}>Search</button>
                </div>
                <div className='users-button'>
                    <button>Login</button>
                </div>
            </div>
            <div className='search-opt'>
                
            </div>
        </div>

    )
}

export default Header