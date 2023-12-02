import { useEffect, useState } from "react"
import { getSomeThingOfCard } from "../../../api/apiCard"

import './../../../styles/SearchBar.css'

export default function SearchOption({ searchName, apiRoute, chosenOption, dataKey, setData }) {

  const [listOptions, setListOptions] = useState([]);
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);

  const handleOpenDropDown = () => {
    setIsOpenDropDown(!isOpenDropDown)
  }

  const handleChose = (data) => {
    setData(prev => ({
      ...prev,
      [dataKey]: data
    }))
  }

  useEffect(() => {
    getSomeThingOfCard(apiRoute).then(data => {
      setListOptions(data);
    })
  }, [])

  return (
    <div className="search-option-box">
      <div className="search-name">
        {searchName}
      </div>
      <div className={`chosen-option ${isOpenDropDown && 'chosing'}`} onClick={handleOpenDropDown}>
        {chosenOption ? chosenOption : 'Any'}
        <div className={`${isOpenDropDown ? 'arrow-drop-up' : 'arrow-drop-down'} icon-7`}></div>
        {isOpenDropDown && <div className="list-options">
          {listOptions.map((option, index) =>
            <div key={index} className="list-option" onClick={() => handleChose(option[dataKey])}>{option[dataKey]}</div>
          )}
        </div>}
      </div>
    </div>
  )
}
