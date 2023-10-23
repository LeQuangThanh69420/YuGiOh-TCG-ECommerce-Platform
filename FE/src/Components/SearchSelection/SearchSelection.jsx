/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import './SearchSelection.css'


function SearchSelection({ type, selections, propSet, onSelect }) {

    const [inputValue, setInputValue] = useState('');
    const [isHover, setIsHover] = useState(false);

    useEffect(() => {
        onSelect(propSet, inputValue);
    }, [inputValue])

    return (
        <div className='select-option-container'>
            <div>
                {type}
            </div>
            <div className='options-container' onMouseOver={() => { setIsHover(true) }} onMouseLeave={() => { setIsHover(false) }} >
                <input type="text" name="" id="" disabled value={inputValue} />
                {isHover &&
                    <div className='options-box' onMouseOver={() => { setIsHover(true) }} onMouseLeave={() => { setIsHover(false) }}>
                        {
                            selections.map((item, index) =>
                                <p className='option' key={index} onClick={(event) => {setInputValue(event.target.innerHTML)}}>
                                    {propSet === 'type' && item.cardTypeName}
                                    {propSet === 'origin' && item.cardOriginName}
                                    {propSet === 'element' && item.cardElementName}
                                    {propSet === 'rarity' && item.cardRarityName}
                                </p>
                            )
                        }
                    </div>
                }
            </div>

        </div>
    )
}

export default SearchSelection