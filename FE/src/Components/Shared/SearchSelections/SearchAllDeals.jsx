import { ALL_DEAL_SEARCH_TEXT, ALL_CARDS_SEARCH_TEXT, ALL_DEAL_SEARCH_OPTIONS } from "../../../constants/allDeals"
import SearchOptionButton from "./SearchOptionButton"
import SearchText from "./SearchText"
import SortOption from "./SortOption"

import './../../../styles/SearchBar.css'

export default function SearchAllDeals({ searchObject, setData, onSearch }) {

    return (
        <div className='search-bar-container'>
            {ALL_DEAL_SEARCH_TEXT.map((item) =>
                <SearchText
                    key={item.id}
                    searchLabel={item.search_label}
                    textDataKey={item.data_key}
                    inputValue={searchObject[item.data_key]}
                    searchObject={searchObject}
                    setData={setData}
                    onSearch={onSearch}
                />
            )}
            {ALL_CARDS_SEARCH_TEXT.map(item =>
                <SearchText
                    key={item.id}
                    searchLabel={item.search_label}
                    textDataKey={item.data_key}
                    inputValue={searchObject[item.data_key]}
                    searchObject={searchObject}
                    setData={setData}
                    onSearch={onSearch}
                />
            )}
            <SearchOptionButton listSearchOptions={ALL_DEAL_SEARCH_OPTIONS} searchObject={searchObject} setData={setData} onSearch={onSearch}/>
            <SortOption searchObject={searchObject} setData={setData} onSearch={onSearch}/>
        </div>
    )
}
