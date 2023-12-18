import { useEffect, useState } from "react"
import { getSomeThingOfCard } from "../../../api/apiCard"

import './../../../styles/SearchBar.css'

export default function SearchOption({ searchName, apiRoute, options, chosenOption, dataKey, setData, isOpen, setIsOpen }) {

  const [listOptions, setListOptions] = useState([]);

  const handleOpenDropDown = () => {
    setIsOpen()
  }

  const handleChose = (data) => {
    setData(prev => ({
      ...prev,
      [dataKey]: data[dataKey]
    }))
  }

  useEffect(() => {
    if (apiRoute) {
      getSomeThingOfCard(apiRoute).then(data => {
        setListOptions(data);
      })
    } else if(options) {
      setListOptions(options)
    }
  }, [])

  return (
    <div className="search-option-box">
      <div className="search-name">
        {searchName}
      </div>
      <div className={`chosen-option ${isOpen && 'chosing'}`} onClick={handleOpenDropDown}>
        {chosenOption ? chosenOption : 'Any'}
        <div className={`${isOpen ? 'arrow-drop-up' : 'arrow-drop-down'} icon-7`}></div>
        {isOpen && <div className="list-options">
          {listOptions.map((option, index) =>
            <div key={index} className="list-option" onClick={() => handleChose(option)}>{option[dataKey]}</div>
          )}
        </div>}
      </div>
    </div>
  )
}
