import SearchOptionButton from "./SearchOptionButton"

import './../../../styles/SearchBar.css'

export default function SearchBar({searchObject, searchLabel, dataKey, setData }) {

    console.log(searchObject);

    return (
        <div className="search-bar-container">
            <div className="search-text"></div>
            <SearchOptionButton searchObject={searchObject} setData={setData}/>
        </div>
    )
}
